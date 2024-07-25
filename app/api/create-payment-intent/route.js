import Order from "@/model/order";
import Product from "@/model/product";
import User from "@/model/user";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import convertToSubCurrency from "@/lib/convertToSubCurrency";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
  try {
    let { amount, productId, quantity, userEmail } = await req.json();

    await connectToDB();

    const user = await User.findOne({ email: userEmail });
    const product = await Product.findOne({
      _id: ObjectId.createFromHexString(productId),
    });

    if (user && product) {
      amount = convertToSubCurrency(product.price * quantity);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
      });

      return NextResponse.json({ clientSecret: paymentIntent.client_secret });

      // await Order.insertOne({
      //   user_id: user.email,
      //   products: [
      //     {
      //       productId,
      //       quantity,
      //     },
      //   ],
      //   total_price: amount,
      // });
    } else {
      return NextResponse.json({ message: "Error failed to" });
    }
  } catch (error) {
    console.error("Internal Error:", error);

    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
