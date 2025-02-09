import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";

/**
 *  @method  GET
 *  @route   ~/api/courses/id
 *  @desc    Get courses By Page Number
 *  @access  public
 */


export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const pageParams = await params;
  const courseId = parseInt(pageParams.id);
  try {
    const courses = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        comments: {
          include: {
            user: true,
          },
        },
        chapters: {
          include: {
            chapterSections: {
              include: {
                userProgress: true,
              },
              orderBy: {
                position: "asc",
              },
            },
          },
          orderBy: {
            position: "asc",
          },
        },
      },
    });
    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
