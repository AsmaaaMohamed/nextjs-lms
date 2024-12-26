"use server";

import { signIn, signOut } from "./auth";

export async function googleClickHandler(){
    await signIn('google', {redirectTo:"/account"});
}
export async function logoutClickHandler() {
  await signOut({ redirectTo: "/" });
}
export async function loginSubmit(values){
  const result= await signIn("credentials", { email:values.email , password:values.password, redirect:false });
  return result;
}