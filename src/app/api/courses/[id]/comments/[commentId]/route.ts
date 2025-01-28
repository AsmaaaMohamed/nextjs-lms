import { auth } from "@/app/_lib/auth";
import prisma from "@/utils/prismaObject";
import { NextRequest, NextResponse } from "next/server";

/**
 *  @method  DELETE
 *  @route   ~/api/courses/courseId/comments/commentId
 *  @desc    DELETE comment of course
 *  @access  public
 */
export async function DELETE(request: NextRequest, { params }) {
  console.log("ddddddddddddddddddddddddddddddddddddddddd");
  const session = await auth();
  const pageParams =  await params;
  const commentId = parseInt(pageParams?.commentId)
  const userId = +session?.user?.id;
  console.log("thiiiiiiiiiiiii", userId);
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      }
    });
    if (!comment) {
      return NextResponse.json(
        { message: "comment not found" },
        { status: 404 }
      );
    }
    await prisma.comment.delete({ where: { id: commentId } });
    return NextResponse.json({ message: "comment deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: `internal server error` },
      { status: 500 }
    );
  }
}
