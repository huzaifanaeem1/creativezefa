import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const design = formData.get("design");

    if (!name || !email || !description) {
      return NextResponse.json({ message: "Please fill all required fields." }, { status: 400 });
    }

    if (!email.includes("@")) {
      return NextResponse.json({ message: "Please provide a valid email." }, { status: 400 });
    }

    if (!(design instanceof File) || design.size === 0) {
      return NextResponse.json({ message: "Please upload your design file." }, { status: 400 });
    }

    // In production, persist to a database or send an email here.
    return NextResponse.json(
      {
        message: `Thanks ${name}. Your quote request has been received.`,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ message: "Unable to process request." }, { status: 500 });
  }
}
