import { NextResponse } from 'next/server';
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  
  if (!code) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const codeVerifier = new Cookies(request).get('code_verifier');

  if (!codeVerifier) {
    return NextResponse.redirect(new URL('/error', request.url));
  }

  try {
    const response = await fetch('https://myanimelist.net/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.MAL_CLIENT_ID,
        client_secret: process.env.MAL_CLIENT_SECRET,
        code: code,
        code_verifier: codeVerifier,
        grant_type: 'authorization_code',
        redirect_uri: process.env.MAL_REDIRECT_URI,
      }),
    });

    const data = await response.json();

    if (data.access_token) {
      const cookies = new Cookies(request, NextResponse.next());
      cookies.set('access_token', data.access_token, { httpOnly: true });

      return NextResponse.redirect(new URL('/', request.url));
    } else {
      return NextResponse.redirect(new URL('/error', request.url));
    }
  } catch (error) {
    console.error('Error exchanging code:', error);
    return NextResponse.redirect(new URL('/error', request.url));
  }
}