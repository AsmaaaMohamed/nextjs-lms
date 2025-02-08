"use server";

import { signIn, signOut } from "./auth";
import { AuthError } from "next-auth";

export async function googleClickHandler(){
    await signIn('google', {redirectTo:"/account"});
}
export async function githubClickHandler() {
   await signIn("github", { redirectTo:'/' });
}
export async function logoutClickHandler() {
  await signOut({ redirectTo: "/login" });
}
export async function loginSubmit(formData: FormData){
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
