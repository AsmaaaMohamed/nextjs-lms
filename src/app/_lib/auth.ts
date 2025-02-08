// @ts-nocheck
import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import prisma from "@/utils/prismaObject";
import bcrypt from "bcryptjs";

const authConfig: NextAuthConfig = {
  providers: [
    Google,
    GitHub,
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user) {
          return null;
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
          return null;
        }
        console.log("uuuuueeeeeeeeeeeeeeee", user);
        return user;
      },
    }),
  ],
  // debug: true,
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user, account }) {
      if (account && account.provider !== "credentials") {
        console.log("fffffffffffffffwwwwwwwwwwwwww");
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });
        if (existingUser) {
          if (existingUser.provider !== account.provider) {
            const errorMessage = `This email is already registered with ${existingUser.provider}. Please use that provider to log in.`;
            return `/login?error=${encodeURIComponent(errorMessage)}`;
          }
          return true;
        }
        await prisma.user.create({
          data: {
            username: user.name,
            email: user.email,
            password: "",
            provider: account.provider,
          },
          select: {
            username: true,
            email: true,
            isAdmin: true,
          },
        });
      }
      // console.log('yyyyyyyyyyyyyyyyyy', user?.error)
      if (user?.error) {
        console.log("uuuuuuuurrrrrrr", user);
        throw new Error(user?.error);
      }
      console.log("hereeeeeeeeeeeeeeeeeeeeee");
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
  pages: {
    signIn: "/login",
  },
};
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
