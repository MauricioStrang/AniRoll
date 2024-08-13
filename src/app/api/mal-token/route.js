import { NextResponse } from 'next/server';

export async function POST(request) {
  const { code, code_verifier } = await request.json();

  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_MAL_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_MAL_CLIENT_SECRET,
    code,
    code_verifier,
    grant_type: 'authorization_code',
    redirect_uri: process.env.NEXT_PUBLIC_MAL_REDIRECT_URI,
  });

  const response = await fetch('https://myanimelist.net/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  });

  const data = await response.json();

  return NextResponse.json(data);
}