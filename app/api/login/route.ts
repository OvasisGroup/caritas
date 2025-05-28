// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { captchaToken } = JSON.parse(req.body);

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`,
    { method: "POST" }
  );
  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return res.status(400).json({ message: "reCAPTCHA verification failed" });
  }

  // Continue with login logic...
  res.status(200).json({ message: "Login success" });
}
