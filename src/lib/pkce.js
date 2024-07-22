//MyAnimeList uses The OAuth workflow with PKCE protocol
//Before authentificating the user, need to generate a Code Verifier and a Code Challenge.

import crypto from 'crypto';

export const generateCodeVerifier = () => {
    const codeVerifier = crypto.randomBytes(64).toString('base64url');
    return codeVerifier;
};

export const generateCodeChallenge = (codeVerifier) => {
    return codeVerifier; // MAL uses plain transformation, so it's the same as the verifier
};