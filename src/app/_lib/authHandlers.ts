"use server";

import { signIn, signOut } from "./auth";

export async function googleClickHandler(){
    await signIn('google', {redirectTo:"/account"});
}
export async function githubClickHandler() {
     await signIn("github", { redirectTo: "/account" });
}
export async function logoutClickHandler() {
  await signOut({ redirectTo: "/login" });
}
export async function loginSubmit(values){
  try {
  const result= await signIn("credentials", { email:values.email , password:values.password, redirect:false });
  console.log('afterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr' , result)
    if (result?.error) {
      console.error("Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr:", result.error);
    }
  return result;
  }
  catch(error){
    console.log("SignIn Error:", error);
    throw error.cause?.err;
  }
}