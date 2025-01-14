import { NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";

/**
 *  @method  GET
 *  @route   ~/api/coursesCategories
 *  @desc    Get coursesCategories By Page Number
 *  @access  public
 */

export async function GET() {
  try {
    const coursesCategories = await prisma.courseCategory.findMany({
      orderBy: { title: "asc" },
    });

    //return Response.json(articles, { status: 200 })
    return NextResponse.json(coursesCategories, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
