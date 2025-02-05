// import { NextResponse } from "next/server";
// export function middleware(request){
//     console.log("request url" , request);
//     return NextResponse.redirect(new URL('/courses',request.url));
// }
// export const config = {
//     matcher: ["/contact"],
// }
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";
import { getToken } from "next-auth/jwt";

export default auth(
   async function middleware(request: NextRequest) {
     const { pathname } = request.nextUrl;

     // Check if the user is authenticated using `auth`
     // const session = await auth();
     // Use your secret that you set in your NextAuth configuration.
     const secret = process.env.AUTH_SECRET;
     const isAuth = await getToken({ req: request, secret });

     // Prevent authenticated users from accessing the login page
     if (isAuth && ["/login", "/signup"].includes(pathname)) {
       return NextResponse.redirect(new URL("/", request.url)); // Redirect to home or dashboard
     }
     // Prevent authenticated users from accessing the login page
     if (!isAuth && pathname === "/account") {
       return NextResponse.redirect(new URL("/login", request.url)); // Redirect to home or dashboard
     }
     return NextResponse.next(); // Allow normal processing for other routes
});
export const config = {
  // Matcher ignoring `/_next/`, `/api/`, ..etc
  matcher: [
    "/account","/login","/signup"
  ],
};