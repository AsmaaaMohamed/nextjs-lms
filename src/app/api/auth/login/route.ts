import { LoginUserDto } from "@/utils/dtos";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/prismaObject";
import bcrypt from "bcryptjs";

/**
 *  @method  POST
 *  @route   ~/api/users/login
 *  @desc    Login User [(Log In) (Sign In) (تسجیل الدخول)]
 *  @access  public
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoginUserDto;
    const user = await prisma.user.findUnique({ where: { email: body.email } });
    // console.log('ssssssssssssssssss')
    if (!user) {
      console.log("vvvvvvvvvvvvbbbbbbbb");
      return NextResponse.json(
        { message: "invalid email or password" },
        { status: 400 }
      );
    }
    if (user?.provider !== "credentials") {
      // throw new Error('differentttttttttttt provider')
      // console.log("myyyyyyyyyyuuuuuuuseer", user);
      return NextResponse.json(
        {
          message: `This email is already registered with ${user.provider}. Please use that provider to log in.`,
        },
        { status: 400 }
      );
    }
    const isPasswordMatch =body.password !=''? await bcrypt.compare(body.password, user.password): null;
    console.log("ssvvvvvvvvvvvvv", isPasswordMatch);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: "invalid email or password" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Authenticated",name:user.username },
      {
        status: 200,
      }
    );
  } catch {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}