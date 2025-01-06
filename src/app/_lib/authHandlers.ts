"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import * as yup from "yup";
import { AuthError } from "next-auth";

export async function googleClickHandler(){
    await signIn('google', {redirectTo:"/account"});
}
export async function githubClickHandler() {
    // try {
    console.log('llllllllllllllllllllllllll')
       const res= await signIn("github", { redirectTo:'/' });
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", res);
    // } catch (error) {
    //   console.log("kkkkkkkkkkkkkkkkkkkkkkkkk", error);
    // }
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
    console.log("SignIn Error:", error.type);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Invalid email or password");
        default:
          throw new Error("Something went wrong.");
      }
    }
    throw error;
  }
}