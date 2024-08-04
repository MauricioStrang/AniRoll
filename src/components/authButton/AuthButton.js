//button component to authorise the user

'use client'
import { generateAuthUrl } from '@/lib/auth';
import { generateCodeChallenge, generateCodeVerifier } from '@/lib/pkce';



const AuthButton = () => {
  const clientId = process.env.MAL_CLIENT_ID; //passing the client id from the mal api
  const state = 'RequestID42'; // Optional

  const handleAuthClick = () => {
    //generating the codeverfier and challenge
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);

    // Store codeVerifier in session storage to use it later in the callback handling
    sessionStorage.setItem('code_verifier', codeVerifier);

    //generate function bellow passing the params for the full URL
    const authUrl = generateAuthUrl(clientId, codeChallenge, state);
    window.location.href = authUrl;
  };

  return (
    <button onClick={handleAuthClick}>
      Authorize with MyAnimeList
    </button>
  );
};

export default AuthButton;