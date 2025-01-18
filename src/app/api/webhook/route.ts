import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/app/_lib/stripe";
import prisma from "@/utils/prismaObject";

export async function POST(req : Request){
    console.log('reqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq' , req)
    const body = await req.text();
    console.log('lllllllllllgfffffgfggffgfgfgfgfg' , body)
    const signature = (await headers()).get("Stripe-Signature") as string;
    let event: Stripe.Event;
    try{
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    }
    catch(error:any){
        return new NextResponse(`Webhook Error: ${error.message}`, {
            status:400
        });
    }
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = +session?.metadata?.userId;
    const courseId = +session?.metadata?.courseId;
    if(event.type === "checkout.session.completed"){
        if(!userId || !courseId){
            return new NextResponse("Webhook Error: Missing metadat" , { status:400});
        }
        await prisma.usersCourses.create({
            data:{
                courseId: courseId,
                userId: userId
            }
        })
    }
    else{
        return new NextResponse(`Webhook Error: Unhandled event type ${event.type}`, {status:200})
    }
    return new NextResponse(null, {status:200});
}