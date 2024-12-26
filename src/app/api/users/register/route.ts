import { RegisterUserDto } from "@/utils/dtos";
import prisma from "@/utils/prismaObject";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

/**
 *  @method  POST
 *  @route   ~/api/users/register
 *  @desc    Create New User [(Register) (Sign Up) (انشاء حساب)]
 *  @access  public
 */
export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as RegisterUserDto;
        const user = await prisma.user.findUnique({where:{email:body.email}});
        if(user){
            return NextResponse.json({message:'this user is already registered'},{status:400})
        }
        const salt = 10;
        const hashedPassword = body.password ? await bcrypt.hash(body.password, salt) : '';
        const newUser = await prisma.user.create({
            data:{
                username: body.name,
                email:body.email,
                password:hashedPassword,
            },
            select:{
                username:true,
                email:true,
                isAdmin:true
            }
        });
        const token = null;
        return NextResponse.json({...newUser, token} , {status:201});
    } catch (error) {
        console.error(error);
        return NextResponse.json(
        { message: "internal server error" },
        { status: 500 }
        );
    }
}
// export async function createUserLogWithSocial(newUser) {
//   const { data, error } = await supabase.from("guests").insert([newGuest]);

//   if (error) {
//     console.error(error);
//     throw new Error("Guest could not be created");
//   }

//   return data;
// }