import Head from "next/head";
import Link from "next/link";
import React from "react";

const PaymentSuccess = ({ searchParams: { amount } }) => {
  return (
    <>
      <Head>
        <title>Payment Success</title>
        <meta name="description" content="Payment was successful" />
      </Head>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-lg mb-6">
            Thank you for your purchase. Your payment has been processed
            successfully.
          </p>
          <p className="text-lg mb-6">Total Amount Paid: ${amount}</p>
          <Link
            href="/"
            className="bg-white text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
