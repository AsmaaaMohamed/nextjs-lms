"use server";

import { signIn, signOut } from "./auth";

export async function googleClickHandler(){
    await signIn('google', {redirectTo:"/account"});
}
export async function githubClickHandler() {
  try {
    const result = await signIn("github", { redirectTo: "/account" });
    if (!result.ok) {
      console.error("GitHubbbbbbbbbbbbbbbbbbbbbbbbbbb Login Error:", result.error);
      // alert(result.error || "An error occurred during GitHub login.");
    } else {
      console.log("GitHub Login Successful:", result);
      // Redirect or handle successful login
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    // alert("Unexpected error occurred.");
  }
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