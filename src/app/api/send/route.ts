import { EmailTemplate } from "@/app/contact/email-template";
import { ContactDto } from "@/utils/dtos";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const body = (await request.json()) as ContactDto;
  try {
    const { data, error } = await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: 'eng_asmaaa20102000@yahoo.com',
      subject: body.subject,
      react: EmailTemplate({
        firstName: body.name,
        mobile: body.mobile,
        message: body.message,
        email:body.email
      }),
    });

    if (error) {
        console.log('eeeeeeeeeeeeeerrrrrrrrrrrrr1111111111111', error)
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log("eeeeeeeeeeeeeerrrrrrrrrrrrr222222222222222", error);
    return Response.json({ error }, { status: 500 });
  }
}
