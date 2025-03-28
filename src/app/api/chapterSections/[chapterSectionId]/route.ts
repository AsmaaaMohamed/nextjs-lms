
import { auth } from "@/app/_lib/auth";
import prisma from "@/utils/prismaObject";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ chapterSectionId: string }> }
) {
  try {
    const session = await auth();
    const userId = session?.user?.id ? +session?.user?.id : null;
    const pageParams = await params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const alreadyCompleted = await prisma.userProgress.findUnique({
      where: {
        userId_chapterSectionId: {
          userId,
          chapterSectionId: +pageParams?.chapterSectionId,
        },
      },
    });
    if (alreadyCompleted) {
      return;
    }
    const userProgress = await prisma.userProgress.create({
      data: {
        userId,
        chapterSectionId: +pageParams?.chapterSectionId,
        isCompleted: true,
      },
    });

    return NextResponse.json(userProgress);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
