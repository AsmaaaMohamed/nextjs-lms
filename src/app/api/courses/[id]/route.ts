import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";

/**
 *  @method  GET
 *  @route   ~/api/courses/id
 *  @desc    Get courses By Page Number
 *  @access  public
 */


export async function GET(req:NextRequest,{params}) {
    const courseId = +params.id;
  console.log('seapppppppppppppppppppppppppp', courseId)
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
      },
    });
    console.log("cccccccccccccccccccccccccccccccc", courses);
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
