import prisma from "@/utils/prismaObject";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";

const authConfig = {
  providers: [
    Google,
    Credentials({
      async authorize(credentials, request) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        console.log("cccccccccc", user);
        if (!user) {
          console.log("User not found");
          return null;
        }
        const isPasswordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        console.log("ttttttttttttttttttt", isPasswordMatch);
        if (isPasswordMatch) {
          // User authenticated successfully
          console.log("userrrrrrrrrr", user);
          return { username: user.username, email: user.email, role: user.isAdmin };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if(user) (token.user = user);
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