"use server";
import { cookies } from "next/headers";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

export async function verifyCode(
formData: FormData
) {
const email = formData.get("email") as string;
const code = formData.get("code") as string;

const latestCode =
await prisma.verificationCode.findFirst({
where: {
email,
},
orderBy: {
createdAt: "desc",
},
});

console.log("EMAIL:", email);
console.log("CODE:", code);
console.log("LATEST CODE:", latestCode);

if (!latestCode) {
redirect(
`/verify?email=${encodeURIComponent(email)}&error=1`
);
}

if (latestCode.code !== code) {
redirect(
`/verify?email=${encodeURIComponent(email)}&error=1`
);
}

const cookieStore = await cookies();

cookieStore.set("userEmail", email, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 24 * 30,
  path: "/",
});

redirect("/orders");
}
