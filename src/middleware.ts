// import { NextResponse } from "next/server";
// export function middleware(request){
//     console.log("request url" , request);
//     return NextResponse.redirect(new URL('/courses',request.url));
// }
// export const config = {
//     matcher: ["/contact"],
// }
import { auth } from "./app/_lib/auth";

export const middleware = auth;
export const config = {
    matcher: ["/account"],
}