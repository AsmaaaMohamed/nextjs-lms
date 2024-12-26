import { DOMAIN } from "@/utils/constants";
import prisma from "@/utils/prismaObject";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";

const authConfig = {
  providers: [Google, Credentials({
    async authorize(credentials, request) {
       const user = await prisma.user.findUnique({ where: { email: credentials.email } });
       if (!user) {
         console.log("User not found");
         return null;
       }
       const isPasswordMatch = await bcrypt.compare(credentials.password, user.password);
       const salt = 10;
       const pass = await bcrypt.hash(user.password, salt);
       console.log("ttttttttttttttttttt",isPasswordMatch);
       if (isPasswordMatch) {
         // User authenticated successfully
         return user;
       }
       return null;
    },
  })],
  callbacks: {
    authorized({auth, request}) {
      console.log('userrrrrrrrrrrrr', auth.user)
      return !!auth?.user;
    },
    async signIn({user,account}){
      if(account.providers !== 'credentials'){
        console.log('fffffffffffffffwwwwwwwwwwwwww')
        try {
          await fetch(`${DOMAIN}/api/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });
          return true;
        } catch {
          return false;
        }
      }
    }
    // سيناريو ان لو اليوزر حاول يكتب الايميل والباسورد وهو مسجل بلسوشيال
  },
  pages:{
    signIn:'/login'
  }
};
export const{
    auth,
    signIn,
    signOut,
    handlers:{GET , POST}
} = NextAuth(authConfig);