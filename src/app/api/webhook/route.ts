import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/app/_lib/stripe";
import prisma from "@/utils/prismaObject";

export async function POST(req : Request){
    const body = await req.text();
    const signature = (await headers()).get("Stripe-Signature") as string;
    let event: Stripe.Event;
    try{
        
    }
}