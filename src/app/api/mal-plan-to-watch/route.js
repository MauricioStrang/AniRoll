
import { NextResponse } from 'next/server';

export async function GET(request) {
  // Retrieve the access token from the request headers (sent from the client)
  const authorization = request.headers.get('Authorization');
  
  if (!authorization) {
    return NextResponse.json({ error: 'Authorization token is missing' }, { status: 401 });
  }

  const accessToken = authorization.split(' ')[1]; // Extract the token

  // Fetch the plan to watch list from MyAnimeList API
  const response = await fetch('https://api.myanimelist.net/v2/users/@me/animelist?status=plan_to_watch', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch plan to watch list' }, { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json(data);
}