import { NextResponse } from "next/server";
// import prisma from "@/utils/prismaObject";
import prisma from "@/utils/prismaObject";

/**
 *  @method  GET
 *  @route   ~/api/posts
 *  @desc    Get posts 
 *  @access  public
 */


export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createAt: "desc" },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
