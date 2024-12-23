import { NextResponse } from "next/server";

export function middleware(request){
    console.log("tttttttttttttttttttttt");
    return NextResponse.redirect(new URL('/about'),request.URL)
}