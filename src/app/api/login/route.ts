import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await new Promise(r => setTimeout(r, 600));

  const { email, password } = await req.json();

  if (email === "demo@site.com" && password === "demo123") {
    return NextResponse.json(
      {
        user: { id: 1, name: "Demo User", email },
        token: "mock-jwt-token-123",
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}
