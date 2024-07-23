import Product from "../../../../models/Product";
import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(req, res) {
  try {
    await connectToDB();

    const id = res.params.id;

    const products = await Product.findOne({
      _id: ObjectId.createFromHexString(id),
    });

    return NextResponse.json({ data: products });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `Error: ${err}` }, { status: 500 });
  }
}
