import { NextResponse } from 'next/server';

export async function POST(request) {
  // Get cookies from the request headers
  const cookieHeader = request.headers.get('cookie');
  
  // Function to parse cookies into an object
  const parseCookies = (cookieHeader) => {
    return cookieHeader
      ? Object.fromEntries(cookieHeader.split('; ').map(c => c.split('=')))
      : {};
  };

  // Parse cookies
  const cookies = parseCookies(cookieHeader);

  // Extract code_verifier from the cookies
  const code_verifier = cookies.code_verifier;

  // Extract the authorization code from the request body
  const { code } = await request.json();

  // Construct the request parameters for the token exchange
  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_MAL_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_MAL_CLIENT_SECRET,
    code,
    code_verifier,
    grant_type: 'authorization_code',
    redirect_uri: process.env.NEXT_PUBLIC_MAL_REDIRECT_URI,
  });

  // Send the token exchange request to the OAuth server
  const response = await fetch('https://myanimelist.net/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  });

  // Parse and return the response data
  const data = await response.json();
  return NextResponse.json(data);
}