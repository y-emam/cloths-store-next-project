import User from "@/models/user";
import { connectToDB } from "@/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { email, username, password } = await req.json();

    await connectToDB();

    const hashedPassword = await bcrypt.hash(password, 10);

    const res = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    if (res) {
      return NextResponse.json({ data: res }, { status: 201 });
    } else {
      return NextResponse.json({ message: `Error: ${res}` }, { status: 400 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `Error: ${err}` }, { status: 400 });
  }
}