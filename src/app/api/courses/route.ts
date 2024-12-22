import { NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";

/**
 *  @method  GET
 *  @route   ~/api/courses
 *  @desc    Get courses By Page Number
 *  @access  public
 */


export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createAt: "desc" },
    });

    //return Response.json(articles, { status: 200 })
    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
