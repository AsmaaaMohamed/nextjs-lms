import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import { DOMAIN } from "@/utils/constants";

const authConfig = {
  providers: [
    Google,
    GitHub,
    Facebook,
    Credentials({
      async authorize(credentials, request) {
        const { email, password } = credentials;
        // try {
        const res = await fetch(`${DOMAIN}/api/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        const user = await res.json();

        if (!res.ok && user) {
          // console.log('uuuuueeeeeeeeeeeeeeee' , user)
          return { status: user?.status, error: user?.message };
        }
        return user;
        // } catch (error) {
        //   console.error("Error in authorize:", error); // Log for debugging
        //   throw error; // Rethrow for higher-level handling
        // }
        // return null;
      },
    }),
  ],
  // debug: true,
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider !== "credentials") {
        console.log("fffffffffffffffwwwwwwwwwwwwww");
        try {
          const res = await fetch(`${DOMAIN}/api/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...user, provider: account.provider }),
          });
          //  const userr = await res.json();
          console.log("dddddddddddddddddddddrrrrrrrrrrrrrrrrrrrrrrr");
          if (!res.ok) {
            const errorData = await res.json();
            console.log('ddddddddddddddddddddd')
            throw errorData.message;
          }
          console.log("tttttttttttttttttttttttttttttttttttttttttttttt", res.ok);
          return true;
        } catch (e) {
          console.log("ffffffffffffffffffffffffffffffffffffffffff", e);
          throw e
        }
      }
      // console.log('yyyyyyyyyyyyyyyyyy', user?.error)
      if (user?.error) {
        console.log("uuuuuuuurrrrrrr", user);
        throw new Error(user?.error);
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user = token.user;
      return session;
    },

    // سيناريو ان لو اليوزر حاول يكتب الايميل والباسورد وهو مسجل بلسوشيال
  },
  // pages:{
  //   signIn:'/login'
  // }
};
export const{
    auth,
    signIn,
    signOut,
    handlers:{GET , POST}
} = NextAuth(authConfig);