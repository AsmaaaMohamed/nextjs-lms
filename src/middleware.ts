
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

export default auth(
   async function middleware(request: NextRequest) {
     const { pathname } = request.nextUrl;
     // Check if the user is authenticated using `auth`
     const isAuth = await auth();
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