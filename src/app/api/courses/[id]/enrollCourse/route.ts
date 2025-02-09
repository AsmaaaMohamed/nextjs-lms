import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";
import { auth } from "@/app/_lib/auth";

/**
 *  @method  POST
 *  @route   ~/api/courses/courseId/enrollCourse
 *  @desc    POST enrolled course
 *  @access  public
 */

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  const courseId = +(await params)?.id;
  const userId = session?.user?.id ? +session?.user?.id : null;
  try {
    const enrolledCourse = userId && (await prisma.usersCourses.findUnique({
      where: {
        userId_courseId: {
          userId: userId,
          courseId: courseId,
        },
      },
    }));
    if (enrolledCourse) {
      return NextResponse.json(
        { message: "You already enrolled this course" },
        { status: 400 }
      );
    }
    if(userId)
      await prisma.usersCourses.create({
        data: {
          userId: userId,
          courseId: courseId,
        },
      });

    //return Response.json(articles, { status: 200 })
    return NextResponse.json("success", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `internal server errrrrrrrrrrrror ${courseId}` },
      { status: 500 }
    );
  }
}
