import Product from "../../../models/Product";
import { connectToDB } from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const products = await Product.find();

    return NextResponse.json({ data: products });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `Error: ${err}` }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `Error: ${err}` }, { status: 500 });
  }
}
