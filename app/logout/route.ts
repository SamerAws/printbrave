import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
const cookieStore = await cookies();

cookieStore.set("userEmail", "", {
maxAge: 0,
path: "/",
});

return NextResponse.redirect(
new URL("/", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
);
}
