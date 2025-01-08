import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  mobile: string;
  message:string;
  email:string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  mobile,
  message,
  email,
}) => (
  <div>
    <h1>
      You just received a new message from Nextjs LMS conyact form, {firstName}!
    </h1>
    <p>
      <span>First name:</span>
      <strong>{firstName}</strong>
    </p>
    <p>
      <span>Email:</span>
      <strong>{email}</strong>
    </p>
    <p>
      <span>Mobile:</span>
      <strong>{mobile}</strong>
    </p>
    <p>
      <span>Message:</span>
      <strong>{message}</strong>
    </p>
  </div>
);
