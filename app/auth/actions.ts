"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";

export async function sendVerificationCode(
  formData: FormData
) {
  const email = formData.get("email") as string;

  const code = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  await prisma.verificationCode.create({
    data: {
      email,
      code,
    },
  });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: "رمز التحقق - PRINT BRAVE",
  html: `
    <div style="font-family:Arial;padding:20px">
      <h2>PRINT BRAVE</h2>
      <p>رمز التحقق الخاص بك:</p>
      <h1>${code}</h1>
      <p>لا تشارك هذا الرمز مع أي شخص.</p>
    </div>
  `,
});
  console.log(
  `Verification code for ${email}: ${code}`
);

redirect(`/verify?email=${email}`);
}
  
