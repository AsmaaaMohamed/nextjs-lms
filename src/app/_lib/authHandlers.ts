"use server";

import { signIn, signOut } from "./auth";

export async function googleClickHandler(){
    await signIn('google', {redirectTo:"/account"});
}
export async function logoutClickHandler() {
  await signOut({ redirectTo: "/" });
}
export async function loginSubmit(values){
  try {
  const result= await signIn("credentials", { email:values.email , password:values.password, redirect:false });
  console.log('afterrrrrrrrrrr' , result)
    if (result?.error) {
      console.error("Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr:", result.error);
    }
  return result;
  }
  catch(error){
    console.log("SignIn Error:", error);
  }
}