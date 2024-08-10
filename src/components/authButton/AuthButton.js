'use client'
import { generateAuthUrl } from '@/lib/auth';
import { generateCodeChallenge, generateCodeVerifier } from '@/lib/pkce';
import Cookies from 'js-cookie';

const AuthButton = () => {
  const clientId = process.env.NEXT_PUBLIC_MAL_CLIENT_ID;
  const state = 'RequestID42'; // Optional
  const redirectUri = 'http://localhost:3000/api/callback';

  const handleAuthClick = async () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    
    // Store codeVerifier in a cookie
    Cookies.set('code_verifier', codeVerifier);

    // Generate and redirect to the authorization URL
    const authUrl = generateAuthUrl(clientId, codeChallenge, state, redirectUri);
    window.location.href = authUrl;
  };

  return (
    <button onClick={handleAuthClick}>
      Authorize with MyAnimeList
    </button>
  );
};

export default AuthButton;