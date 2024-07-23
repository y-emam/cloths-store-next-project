/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Product = ({ params }) => {
  const [product, setProduct] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateProduct = () => {
      try {
        fetch(`/api/products/${params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch product");
            }
            return res.json();
          })
          .then((res) => {
            setProduct(res.data);

            setLoading(false);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    };
    updateProduct();
  }, []);

  return (
    <section className="text-white">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1>{product.name}</h1>
          <Image
            width={400}
            height={400}
            src={`/assets/products/${product.image}`}
            alt={product.image.split(".")[0]}
          />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => {}}>Buy</button>
        </>
      )}
    </section>
  );
};

export default Product;
