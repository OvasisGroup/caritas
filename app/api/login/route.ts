// app/api/login/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { userId, password, captchaToken } = body;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

  const captchaRes = await fetch(verifyUrl, { method: "POST" });
  const captchaData = await captchaRes.json();

  if (!captchaData.success) {
    return NextResponse.json({ message: "reCAPTCHA verification failed" }, { status: 400 });
  }

  // Replace with your actual login validation
  if (userId === "admin" && password === "admin") {
    return NextResponse.json({ message: "Login success" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }
}
