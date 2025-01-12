import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";

/**
 *  @method  POST
 *  @route   ~/api/courses/enrollCourse
 *  @desc    POST enrolled course
 *  @access  public
 */

export async function POST(request: NextRequest) {
    console.log('/llldddssssssssssss')
    const {userId , courseId} = await request.json();
    console.log('thiiiiiiiiiiiii',userId)
  try {
     await prisma.user.create({
       data: {
          courseId, userId 
       },
     });

    //return Response.json(articles, { status: 200 })
    return NextResponse.json('success', { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
