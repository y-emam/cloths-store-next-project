"use client";

import Image from "next/image";
import React from "react";

const Product = ({ product }) => {
  return (
    <section className="text-white">
      <h1>{product.name}</h1>
      <Image
        width={product.width}
        height={product.height}
        src={product.imageUri}
        alt={product.alt}
      />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => {}}>Buy</button>
    </section>
  );
};

export default Product;
