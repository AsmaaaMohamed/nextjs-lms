import { NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";

/**
 *  @method  GET
 *  @route   ~/api/instructors
 *  @desc    Get instructors By Page Number
 *  @access  public
 */

export async function GET() {
  try {
    const instructors = await prisma.instructor.findMany({
      orderBy: { createAt: "desc" },
    });

    //return Response.json(articles, { status: 200 })
    return NextResponse.json(instructors, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
