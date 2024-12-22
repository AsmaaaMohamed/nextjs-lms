import { NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";

/**
 *  @method  GET
 *  @route   ~/api/skills
 *  @desc    Get skills
 *  @access  public
 */

export async function GET() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: { createAt: "desc" },
    });
    return NextResponse.json(skills, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
