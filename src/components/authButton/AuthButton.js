//button component to authorise the user

'use client'
import { generateAuthUrl } from '@/lib/auth';
import { generateCodeChallenge, generateCodeVerifier } from '@/lib/pkce';
import Cookies from 'js-cookie'


const AuthButton = () => {
  const clientId = process.env.NEXT_PUBLIC_MAL_CLIENT_ID; //passing the client id from the mal api
  const state = 'RequestID42'; // Optional
  const redirectUri = 'http://localhost:3000/api/callback'

  const handleAuthClick = () => {
    //generating the codeverfier and challenge
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);
    // Store codeVerifier in session storage to use it later in the callback handling
    Cookies.set('code_verifier', codeVerifier);

    //generate function bellow passing the params for the full URL
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