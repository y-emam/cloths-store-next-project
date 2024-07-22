import Product from "@/models/Product";
import { connectToDB } from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ message: "This is a POST request" });
  } else if (req.method === "GET") {
    await connectToDB();

    const products = await Product.find();

    console.log(products);

    res.status(200).json({ data: products });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
