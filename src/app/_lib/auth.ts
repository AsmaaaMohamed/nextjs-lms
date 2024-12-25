import { DOMAIN } from "@/utils/constants";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [Google, Credentials],
  callbacks: {
    authorized({auth, request}) {
      return !!auth?.user;
    },
    async signIn({user,account}){
      if(account.providers !== 'credentials'){
        try {
          await fetch(`${DOMAIN}/api/users/register`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                  }); 
          return true;
        } catch  {
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