"use server";

import { prisma } from "../lib/prisma";
import { cookies } from "next/headers";


export async function createOrder(formData: FormData) {
  const customer = formData.get("customer") as string;
  const phone = formData.get("phone") as string;
  const governorate = formData.get("governorate") as string;

  const area = formData.get("area") as string;
  const landmark = formData.get("landmark") as string;

  const product = formData.get("product") as string;
  const notes = formData.get("notes") as string;
  const total = Number(formData.get("total"));
const cart = JSON.parse(
  (formData.get("cart") as string) || "[]"
);
  const cookieStore = await cookies();
  const email = cookieStore.get("userEmail")?.value;
console.log("ORDER EMAIL:", email);
console.log("ORDER COOKIES:", cookieStore.getAll());
  let userId: number | null = null;

  if (email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      userId = user.id;
    }
  }

  const order = await prisma.order.create({
  data: {
    customer,
    phone,
    governorate,
    area,
    landmark,
    product,
    notes,
    total,
    userId,
  },
});

for (const item of cart) {
  const product = await prisma.product.findUnique({
    where: {
      id: item.productId,
    },
  });

  if (!product) continue;

  await prisma.orderItem.create({
    data: {
      orderId: order.id,
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      price: product.price,
      quantity: item.quantity,
    },
  });
}

}