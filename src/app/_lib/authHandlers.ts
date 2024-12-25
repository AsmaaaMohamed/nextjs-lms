"use server";

import { signIn, signOut } from "./auth";

export async function googleClickHandler(){
    await signIn('google', {redirectTo:"/account"});
}
export async function logoutClickHandler() {
  await signOut({ redirectTo: "/" });
}