export const authConfig = {
    pages:{
        signIn: '/login',   // this is the default redirect when we return false to the config
    },
    providers: [],
    callbacks: {
        async jwt({token, user}){  
            if(user){                             
                token.id = user.id;                
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({session, token}){
            if(token){
                session.user.id = token.id;
            }
            return session;
        },
        authorized({auth, request}){
            
            const user = auth?.user;
            const isOnUsersPanel = request.nextUrl?.pathname.startsWith("/users")
            const isOnLoginPanel = request.nextUrl?.pathname.startsWith("/login")
            const isOnRollPanel = request.nextUrl?.pathname.startsWith("/roll")
            const isOnRegisterPanel = request.nextUrl?.pathname.startsWith("/register")

            if((isOnUsersPanel || isOnRollPanel) && !user){
                return false;
            }

            if((isOnLoginPanel || isOnRegisterPanel) && user){
                return Response.redirect(new URL("/", request.nextUrl));
            }
            
            return true;
        },
    },
};