import { NextResponse } from 'next/server';

export async function GET(request) {
  const authorization = request.headers.get('Authorization');
  
  if (!authorization) {
    return NextResponse.json({ error: 'Authorization token is missing' }, { status: 401 });
  }

  const accessToken = authorization.split(' ')[1]; // Extract the token
  const limit = 100; // Maximum limit per request, adjust if needed
  let offset = 0; // Offset for pagination
  let allAnime = [];
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(`https://api.myanimelist.net/v2/users/@me/animelist?status=plan_to_watch&limit=${limit}&offset=${offset}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch plan to watch list' }, { status: response.status });
    }

    const data = await response.json();
    allAnime = allAnime.concat(data.data);

    // Check if there are more items to fetch
    if (data.paging && data.paging.next) {
      offset += limit; // Move to the next page
    } else {
      hasMore = false; // No more pages
    }
  }

  return NextResponse.json({ data: allAnime });
}