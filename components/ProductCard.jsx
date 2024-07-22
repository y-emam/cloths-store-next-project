import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ params }) => {
  return (
    <Link href="/products/1" className="flex flex-col  max-w-80">
      <Image
        width={320}
        height={320}
        src="/assets/products/hoody.jpg"
        alt="Product Image"
      />
      <p className="w-full text-left text-xs mt-1">
        <span>BLACK Hoody</span>
        <br />
        <span>200$</span>
      </p>
    </Link>
  );
};

export default ProductCard;
