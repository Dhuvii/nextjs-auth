import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const token = jwt.sign(
      {
        userId: "user_12345",
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h",
      }
    );

    return NextResponse.json(
      {
        success: true,
        message: "",
        data: {
          token,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message:
          "Something went wrong while creating your account. Please try again later.",
        data: {
          error,
        },
      },
      { status: 400 }
    );
  }
}
