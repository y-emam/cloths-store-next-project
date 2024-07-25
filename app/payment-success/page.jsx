import React from "react";

const PaymentSuccess = ({ searchParams: { amount } }) => {
  return <div className="text-white">{amount}</div>;
};

export default PaymentSuccess;
