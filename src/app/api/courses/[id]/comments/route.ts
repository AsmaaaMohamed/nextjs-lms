import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";
import { auth } from "@/app/_lib/auth";

/**
 *  @method  POST
 *  @route   ~/api/courses/courseId/comments
 *  @desc    POST comment to enrolled course
 *  @access  public
 */

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json();
  const session = await auth();
  const courseId = +(await params)?.id;
  const userId = session?.user?.id ? +session?.user?.id : null;
  try {
    const enrolledCourse =
      userId &&
      (await prisma.usersCourses.findUnique({
        where: {
          userId_courseId: {
            userId: userId,
            courseId: courseId,
          },
        },
      }));
    if (enrolledCourse) {
      await prisma.comment.create({
        data: {
          userId: userId,
          courseId: courseId,
          text: body.comment,
        },
      });
      return NextResponse.json("success", { status: 200 });
    }
    return NextResponse.json(
      { message: `You don't authorize to comment on this course` },
      { status: 500 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: `internal server error` },
      { status: 500 }
    );
  }
}
/**
 *  @method  GET
 *  @route   ~/api/courses/courseId/comments
 *  @desc    GET comments of course
 *  @access  public
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const courseId = +(await params)?.id;
  try {
    const comments = await prisma.comment.findMany({
      where: {
        courseId: courseId,
      },
      include: {
        user: true,
      },
      orderBy: { id: "asc" },
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: `internal server error` },
      { status: 500 }
    );
  }
}