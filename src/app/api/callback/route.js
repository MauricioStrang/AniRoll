import { NextResponse } from 'next/server';
import { getCookie, setCookie } from 'cookies-next';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return new Response(JSON.stringify({ error: 'Authorization code missing' }), { status: 400 });
  }

  const codeVerifier = getCookie('code_verifier', { req: request });

  if (!codeVerifier) {
    return new Response(JSON.stringify({ error: 'Code verifier missing' }), { status: 400 });
  }

  try {
    // POST request to exchange the authorization code for an access token
    const response = await fetch('https://myanimelist.net/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_MAL_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_MAL_CLIENT_SECRET,
        code: code, // Pass the authorization code from the query parameters
        code_verifier: codeVerifier, // Use the code_verifier stored in cookies
        grant_type: 'authorization_code',
        redirect_uri: process.env.MAL_REDIRECT_URI,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to exchange code for token');
    }

    // Store the access token in a secure cookie
    setCookie('access_token', data.access_token, { req: request, res: NextResponse.next(), httpOnly: true });

    // Redirect the user to the homepage or a dashboard after successful authentication
    return NextResponse.redirect(new URL('/callback', request.url));
  } catch (error) {
    console.error('Error during token exchange:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { status: 500 });
  }
}