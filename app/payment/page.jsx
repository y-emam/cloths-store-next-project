"use client";

import CheckoutPage from "@/components/CheckoutPage";
import convertToSubCurrency from "@/lib/convertToSubCurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PaymentPage = ({ searchParams: data }) => {
  const { productId, quantity, amount } = data;
  const { data: session } = useSession();

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-black">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Yasuo</h1>
        <h2 className="text-2xl">
          Total Price
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubCurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage
          amount={amount}
          productId={productId}
          quantity={quantity}
          userEmail={session.user.email}
        />
      </Elements>
    </main>
  );
};

export default PaymentPage;
