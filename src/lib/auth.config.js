//We need authConfig to use the middleware
export const authConfig = {
    pages:{
        signIn: '/login',   // this is the default redirect when we return false to the config
    },
    providers: [],
    callbacks: {                         // when logging in with user credentials auth only includes the email
        async jwt({token, user}){        // when logged in next auth returns a jwt token
            if(user){
                token.username = user.username                    // using the user information we can update the token       
                token.id = user.id;                
            }
            return token;
        },
        async session({session, token}){
            if(token){ 
                session.user.username = token.username; 
                session.user.id = token.id;     //so we update our session with the new token        
            }                                   //we only updated the userId and username, not interested in showing the password
            return session;                        
        },

        authorized({auth, request}){     // this is the configuration function with the appropiate conditions
                                         // we use the updated auth that uses the updated session
            
            const user = auth?.user;
            const isOnUsersPanel = request.nextUrl?.pathname.startsWith("/users")
            const isOnLoginPanel = request.nextUrl?.pathname.startsWith("/login")
            const isOnRollPanel = request.nextUrl?.pathname.startsWith("/roll")
            const isOnRegisterPanel = request.nextUrl?.pathname.startsWith("/register")

            //returning false means that you can't go to that Panel
            if((isOnUsersPanel || isOnRollPanel) && !user){
                return false;
            }

            if((isOnLoginPanel || isOnRegisterPanel) && user){
                return Response.redirect(new URL("/", request.nextUrl));
            }
            
            return true;  // the user is logged in and can enter every other panel
        },
    },
};