import axios from axios

const CLIENT_ID = process.env.MAL_CLIENT_ID;
const CLIENT_SECRET = process.env.MAL_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/callback';


//the API client received an Autorisation Code and an optional state value.
//we make an http request to get a JSON object containing properties 
//token_type (string): always set to "Bearer"
//expires_in (number): expiration time of the Access Token
//access_token (string): the user's Access Token.
//refresh_token (string): the user's Refresh Token
export default async (req, res)=>{
    const {code} = req.query;
    const codeVerifier = req.session.codeVerifier

    try {
        const response = await axios.post('https://myanimelist.net/v1/oauth2/token', null, {
            params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code,
                code_verifier: codeVerifier,
                grant_type: 'authorization_code',
                redirect_uri: REDIRECT_URI,
            }
        })

        const { access_token } = response.data;
        req.session.accessToken = access_token;

        res.redirect('/');
    } catch (error) {
        console.error('Error exchanging authorization code for access token:', error);
        res.status(500).send('Error');
    }
}