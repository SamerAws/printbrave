"use server";

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

  console.log(
    `Verification code for ${email}: ${code}`
  );

  
}