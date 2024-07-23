"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateProducts = async () => {
      try {
        // get products from backend
        fetch("/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch products");
            }
            return res.json();
          })
          .then((res) => {
            setProducts(res.data);

            setLoading(false);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    };

    updateProducts();
  }, []);

  return (
    <section className="w-full text-white">
      <h1 className="text-5xl text-center font-bold">Products</h1>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <ul className="w-full text-white mt-10 p-0 gap-5 grid lg:grid-cols-4 sm:grid-cols-2 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Products;
