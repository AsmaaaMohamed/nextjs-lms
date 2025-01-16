import { getCourseById } from "@/apiCalls/courseByIdApiCall";
import { auth } from "@/app/_lib/auth";
import { stripe } from "@/app/_lib/stripe";
import prisma from "@/utils/prismaObject";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req:Request ,{params}:{params :{id:string}}){
    try {
        const session = await auth();
        if(!session?.user){
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const course = await getCourseById(+params?.id);
        const existingEnrolledCourse = await prisma.usersCourses.findUnique({
            where:{
                userId_courseId:{
                    userId:session.user.id,
                    courseId:+params.id
                }
            }
        });
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
                        name: course.title,
                    },
                    unit_amount: Math.round(course.price! * 100)
                }
            }
        ];
        let stripeCustomer = await prisma.stripeCustomer.findUnique({
            where:{
                userId: session.user.id
            },
            select:{
                stripeCustomerID: true
            }
        });
        if(!stripeCustomer){
            const customer = await stripe.customers.create({
                email: session.user.email
            });
            stripeCustomer = await prisma.stripeCustomer.create({
                data:{
                    userId: session.user.id,
                    stripeCustomerId: customer.id
                }
            });
        }
        const session = await stripe.checkout.sessions.create({
          customer: stripeCustomer.stripeCustomerID,
          line_items,
          mode: "payment",
          success_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${course.id}?success=1`,
          cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${course.id}?canceled=1`,
          metadata:{
            courseId: course.indexOf,
            userId: session.user.id
          }
        });
        return NextResponse.json({url: session.url})
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal serve error",{status:500})
    }
}