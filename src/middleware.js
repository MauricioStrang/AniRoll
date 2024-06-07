// Middleware runs before cached content and routes are matched. Then, based on the incoming request, you can modify the response.
import NextAuth from "next-auth"
import { authConfig } from "./lib/auth.config"

export default NextAuth(authConfig).auth  //This line initializes NextAuth with the provided authConfig


export const config = {  // This config object is used to specify when the middleware should run.
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],  
                                                  // matcher property contains an array of path patterns that the middleware should apply to
}  // applied to all routes except API routes, static files, files with extensions, and Next.js internal files.