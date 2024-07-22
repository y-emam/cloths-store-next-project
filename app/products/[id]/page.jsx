"use client";

import React from "react";

const Product = ({ params }) => {
  return (
    <section className="text-white">
      <h1>Product {params.id} Name</h1>
      {/* <Image /> */}
      <p>Product Description</p>
      <p>Product Price</p>
      <button>Add to Cart</button>
    </section>
  );
};

export default Product;
