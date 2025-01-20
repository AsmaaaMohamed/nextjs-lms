import { getCourseById } from "@/apiCalls/courseByIdApiCall";
import { auth } from "@/app/_lib/auth";
import { stripe } from "@/app/_lib/stripe";
import prisma from "@/utils/prismaObject";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req:Request ,{params}:{params : Promise<{ id: number }>}){
    try {
        const authSession = await auth();
        const pageParams = await params;
        const courseId = +pageParams.id;
        console.log("sessssssssssssssssssss", authSession?.user?.email);
        if(!authSession?.user){
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const course = await getCourseById(courseId);
        // console.log('thisccccccccoooooooooooouuuuuuu' , course)
        const existingEnrolledCourse = await prisma.usersCourses.findUnique({
            where:{
                userId_courseId:{
                    userId:+authSession.user.id!,
                    courseId:courseId
                }
            }
        });
        // console.log("thiseeeeeeeeeeeeeeeeeeeexxxxxxxxxxxxccoouu", course);
        if(existingEnrolledCourse){
            return new NextResponse("You Already Enrolled this course", {
              status: 400,
            });
        }
        const line_items: Stripe.Checkout.SessionCreateParams.LineItem[]=[
            {
                quantity:1,
                price_data:{
                    currency:"USD",
                    product_data:{
                        name: course?.title,
                    },
                    unit_amount: Math.round(course?.price * 100)
                }
            }
        ];
        let stripeCustomer = await prisma.stripeCustomer.findUnique({
            where:{
                userId: +authSession?.user?.id
            },
            select:{
                stripeCustomerId: true
            }
        });
        if(!stripeCustomer){
            const customer = await stripe.customers.create({
                email: authSession.user.email!
            });
            stripeCustomer = await prisma.stripeCustomer.create({
                data:{
                    userId: +authSession.user.id!,
                    stripeCustomerId: customer.id
                }
            });
        }
        const session = await stripe.checkout.sessions.create({
          customer: stripeCustomer.stripeCustomerId,
          line_items,
          mode: "payment",
          success_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${course.id}?success=1`,
          cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${course.id}?canceled=1`,
          metadata:{
            courseId: course.id,
            userId: +authSession.user.id
          }
        });
        console.log("seeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwww", session)
        return NextResponse.json({url: session.url})
    } catch (error) {
        console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrr',error)
        return new NextResponse("Internal serve errorrrrr",{status:500})
    }
}