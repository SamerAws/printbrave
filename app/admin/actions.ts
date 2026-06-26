
"use server";

import { prisma } from "../lib/prisma";

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const image = formData.get("image") as string;
  const video = formData.get("video") as string;

  await prisma.product.create({
    data: {
      name,
      description,
      price,
      image,
      video,
    },
  });
}

export async function deleteProduct(id: number) {
  await prisma.product.delete({
    where: {
      id,
    },
  });
}

export async function deleteOrder(id: number) {
  console.log("DELETE ORDER ID:", id);

  await prisma.orderItem.deleteMany({
    where: {
      orderId: id,
    },
  });

  await prisma.order.delete({
    where: {
      id,
    },
  });

  console.log("DELETED");
}

export async function updateProduct(
  id: number,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const image = formData.get("image") as string;
  const video = formData.get("video") as string;

  await prisma.product.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      price,
      image,
      video,
    },
  });
}

export async function addProductMedia(
  formData: FormData
) {
  const productId = Number(
    formData.get("productId")
  );

  const url = formData.get("url") as string;

  const type = formData.get("type") as string;

  await prisma.productMedia.create({
    data: {
      productId,
      url,
      type,
    },
  });
}

export async function deleteProductMedia(
  id: number
) {
  await prisma.productMedia.delete({
    where: {
      id,
    },
  });
}
