"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { AuthError } from "next-auth";

export async function googleClickHandler(){
    await signIn('google', {redirectTo:"/account"});
}
export async function githubClickHandler() {
    try {
      const res = await signIn("github", { redirect:false });
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", res.type);
    } catch (error) {
      console.log("kkkkkkkkkkkkkkkkkkkkkkkkk", error.type);
    }
}
export async function logoutClickHandler() {
  await signOut({ redirectTo: "/login" });
}
export async function loginSubmit(formData: FormData){
  try {
    const result= await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    // console.log("afterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", result);
    // if (result?.error) {
      console.error("Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr:", result);
    // }
    // revalidatePath('/')
    // return result;
  }
  catch(error: any){
    console.log("SignIn Error:", error.cause.err);
    throw error.cause.err;
  }
  revalidatePath('/')
}