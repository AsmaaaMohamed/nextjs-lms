import { NextResponse } from "next/server";
import prisma from "@/utils/prismaObject";

/**
 *  @method  GET
 *  @route   ~/api/courses
 *  @desc    Get courses By Page Number
 *  @access  public
 */


export async function GET(req:any) {
  const url = new URL(req.url);
  const searchparams = new URLSearchParams(url.searchParams);
  const category = searchparams.get('category')?searchparams.get('category') as string : '';
  const courseName = searchparams.get('title')? searchparams.get('title') as string :'';
  const coursePrice = searchparams.get('price')? + searchparams.get('price') as number :undefined;
  console.log('seapppppppppppppppppppppppppp', category)
  try {
    const courses = await prisma.course.findMany({
      where: {
        category: { contains: category },
        title: { contains: courseName, mode: "insensitive" },
        ...(coursePrice !== undefined && { price: coursePrice }), // Include price only if it's defined
      },
      orderBy: { createAt: "asc" },
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
