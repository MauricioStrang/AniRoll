import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from 'bcryptjs'
import { authConfig } from "./auth.config";


const login = async(credentials) =>{
    try {
        connectToDb();
        const user = await User.findOne({username: credentials.username})  // we search in the database for the user with the credentials that we passed
                                                                           // the first username is the User.username model that is taking the username from the loginForm
        if(!user){
            throw new Error('Wrong Credentials!')                          //user passed doesn't exist on db
        }

        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,                         //we compare the hasshed passwords (idk guess returns a boolean)
            user.password
        );

        if(!isPasswordCorrect){
            throw new Error('Wrong Credentials!')
        }

        return user;  //if everything works we will return the user (the session)
    } catch (err) {
        console.log(err);                       //I hope this never happens
        throw new Error('Failed to login!')
    }
}




export const { handlers:{GET, POST}, auth, signIn, signOut} = NextAuth({    //auth is the user session
    ...authConfig, providers: [ CredentialsProvider({                      //in the future will se if myAnimelist has a provider
        async authorize(credentials){                                      //we use our own credentialsProviders for now
            try {
                const user = await login (credentials);
                return user                               
            } catch (err) {
                console.log('null, you fool')
                return null
            }
        }            
    })
],
callbacks:{                //Callbacks are functions that allow you to control the authentication flow and behavior. 
                           //They are invoked during specific events in the authentication process.
    ...authConfig.callbacks,
}
})




//OAuth for MyAnimeList to generate the authorisation URL
export const generateAuthUrl = (clientId, codeChallenge, state, redirectUri)=>{

    const baseUrl = 'https://myanimelist.net/v1/oauth2/authorize';
    const responseType = 'code';
  

    //we construct the URL making it an object
    const url = new URL(baseUrl);
    url.searchParams.append('response_type', responseType);
    url.searchParams.append('client_id', clientId);
    url.searchParams.append('code_challenge', codeChallenge);

  if (state) {
    url.searchParams.append('state', state);
  }

  if (redirectUri) {
    url.searchParams.append('redirect_uri', redirectUri);
  }

  url.searchParams.append('code_challenge_method', 'plain');

  return url.toString();
}
