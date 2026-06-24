"use server";

import { prisma } from "@/app/lib/prisma";
import { cookies } from "next/headers";

export async function createOrder(
formData: FormData
) {
const customer =
formData.get("customer") as string;

const phone =
formData.get("phone") as string;

const governorate =
formData.get("governorate") as string;

const product =
formData.get("product") as string;

const notes =
formData.get("notes") as string;

const cookieStore = await cookies();

const email =
cookieStore.get("userEmail")?.value;

let userId: number | null = null;

if (email) {
const user =
await prisma.user.findUnique({
where: {
email,
},
});


if (user) {
  userId = user.id;
}


}

await prisma.order.create({
data: {
customer,
phone,
governorate,
product,
notes,
userId,
},
});
}
