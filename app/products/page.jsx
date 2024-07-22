"use client";

import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // load products from the backend
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <section className="w-full text-white">
      <h1 className="text-5xl text-center font-bold">Products</h1>

      {loading ? (
        <div className="w-full h-full flex justify-center items-center mt-32">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
      ) : (
        <ul className="w-full mt-10 p-0 gap-5 grid lg:grid-cols-4 sm:grid-cols-2 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Products;
