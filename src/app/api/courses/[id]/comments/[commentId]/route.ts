import prisma from "@/utils/prismaObject";
import { NextRequest, NextResponse } from "next/server";

/**
 *  @method  DELETE
 *  @route   ~/api/courses/courseId/comments/commentId
 *  @desc    DELETE comment of course
 *  @access  public
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ commentId: string }> }
) {
  console.log("ddddddddddddddddddddddddddddddddddddddddd");
  const pageParams = await params;
  const commentId = parseInt(pageParams?.commentId);
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
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
