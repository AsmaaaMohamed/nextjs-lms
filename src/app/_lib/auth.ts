import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import prisma from "@/utils/prismaObject";
import bcrypt from "bcryptjs";

const authConfig = {
  providers: [
    Google,
    GitHub,
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        // try {
        // const res = await fetch(`${DOMAIN}/api/users/login`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email,
        //     password,
        //   }),
        // });
        // const user = await res.json();
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if(!user){
            // if (user.provider !== "credentials") {
              //   throw new Error(
              //     `This email is already registered with ${user.provider}. Please use that provider to log in.`
              //   );
              return null;
              // return NextResponse.json(
              //   {
              //     message: `This email is already registered with credentials. Please use that provider to log in.`,
              //   },
              //   { status: 401 }
              // );
            // }
            // console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
            // throw new Error('this user is already registered')
        }
        const isPasswordMatch =await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
             return null
            }
        console.log("uuuuueeeeeeeeeeeeeeee", user);
        // if (!res.ok && user) {
        //   //  console.log('uuuuueeeeeeeeeeeeeeee' , user)
        //   return { status: user?.status, error: user?.message };
        // }
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
    authorized({auth, request}){
      return !! auth?.user
    },
    async signIn({ user, account }) {
      if (account && account.provider !== "credentials") {
        console.log("fffffffffffffffwwwwwwwwwwwwww");
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });
        if(existingUser){
              if (existingUser.provider !== account.provider) {
                //   throw new Error(
                //     `This email is already registered with ${user.provider}. Please use that provider to log in.`
                //   );
                //   return NextResponse.json({
                //     message: `This email is already registered with ${user.provider}. Please use that provider to log in.`,
                //   },
                // {status:401});
                // throw new Error(
                //   `This email is already registered with ${existingUser.provider}. Please use that provider to log in.`
                // )
                // console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
                const errorMessage =  `This email is already registered with ${existingUser.provider}. Please use that provider to log in.`;
                return `/login?error=${encodeURIComponent(errorMessage)}`;
              }
              return true;
          }
          const newUser = await prisma.user.create({
            data: {
              username: user.name,
              email: user.email,
              password: '',
              provider: account.provider,
            },
            select: {
              username: true,
              email: true,
              isAdmin: true,
            },
          });
        // try {
        //   const res = await fetch(`${DOMAIN}/api/users/register`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ ...user, provider: account.provider }),
        //   });
        //   //  const userr = await res.json();
        //   console.log("dddddddddddddddddddddrrrrrrrrrrrrrrrrrrrrrrr");
        //   if (!res.ok) {
        //     const errorData = await res.json();
        //     console.log('ddddddddddddddddddddd')
        //     throw errorData;
        //   }
        //   console.log("tttttttttttttttttttttttttttttttttttttttttttttt", res.ok);
        //   return true;
        // } catch (e) {
        //   console.log("ffffffffffffffffffffffffffffffffffffffffff", e);
        //   if (e instanceof AuthError) {
        //   redirect(`/login?error=${e.type}`);
        // }
        // }
      }
      // console.log('yyyyyyyyyyyyyyyyyy', user?.error)
      if (user?.error) {
        console.log("uuuuuuuurrrrrrr", user);
        throw new Error(user?.error);
      }
      console.log('hereeeeeeeeeeeeeeeeeeeeee')
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