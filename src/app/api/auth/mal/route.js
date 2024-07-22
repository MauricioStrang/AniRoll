import { generateCodeChallenge, generateCodeVerifier } from '@/lib/pkce';
import axios from 'axios';

const CLIENT_ID = process.env.MAL_CLIENT_ID;
const REDIRECT_URI = 'http://localhost:3000/callback';


//function to handle the OAuth initiation process
export default async (req, res) => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);

    const authorizationUrl = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&code_challenge=${codeChallenge}&state=state123&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    //URL which can be sent to a user to generate an Access Token for our API client.

    req.session.codeVerifier = codeVerifier;
    //Stores the code verifier in the session. Need it later to exchange the authorization code for an access token.
    
    res.redirect(authorizationUrl);
};