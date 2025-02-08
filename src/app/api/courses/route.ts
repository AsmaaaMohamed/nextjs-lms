// @ts-nocheck
import { NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";

/**
 *  @method  GET
 *  @route   ~/api/courses
 *  @desc    Get courses By Page Number
 *  @access  public
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category")
    ? (searchParams.get("category") as string)
    : "";
  const courseName = searchParams.get("title")
    ? (searchParams.get("title") as string)
    : "";
  const coursePrice = searchParams?.get("price")
    ? (+searchParams.get("price") as number)
    : undefined; /* eslint-disable-line */
  // console.log('seapppppppppppppppppppppppppp', category)
  try {
    const courses = await prisma.course.findMany({
      where: {
        category: { contains: category },
        title: { contains: courseName, mode: "insensitive" },
        ...(coursePrice !== undefined && { price: coursePrice }), // Include price only if it's defined
      },
      orderBy: { createAt: "asc" },
    });
    // console.log("cccccccccccccccccccccccccccccccc", courses);
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
