//MyAnimeList uses The OAuth workflow with PKCE protocol
//Before authentificating the user, need to generate a Code Verifier and a Code Challenge.

export function generateCodeVerifier() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let result = '';
  for (let i = 0; i < 128; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function generateCodeChallenge(verifier) {
  return verifier; 
}