/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Product = ({ params }) => {
  const [product, setProduct] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { data: session } = useSession();
  const router = useRouter();

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
            setTotalPrice(res.data.price);

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
    <section className="w-full text-white">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full flex flex-row justify-around flex-wrap">
          <Image
            width={320}
            height={320}
            src={`/assets/products/${product.image}`}
            alt={product.image.split(".")[0]}
            className="mb-10"
          />
          <div className="min-h-96 h-72 w-full max-w-80 border-white border-2 p-3">
            <h1 className="text-2xl mb-4">{product.name}</h1>
            <p className="h-20">{product.desc}</p>
            <div className="flex flex-row justify-between items-center mb-5">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                className="w-1/2 h-5 border-white bg-black border-2 p-1 text-center outline-none"
                type="number"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                  setTotalPrice(product.price * e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="quantity"
              >
                Price
              </label>
              <p>${product.price}</p>
            </div>
            <hr className="border-t-2 border-white my-4" />
            <div className="flex flex-row justify-between items-center">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="quantity"
              >
                Total Price
              </label>
              <p>${totalPrice}</p>
            </div>
            <button
              className="w-full bg-white text-black p-2 mt-8 font-bold"
              onClick={() => {
                if (session) {
                  router.push(
                    `/payment?productId=${
                      product._id
                    }&quantity=${quantity}&amount=${product.price * quantity}`
                  );
                } else {
                  router.push("/signin");
                }
              }}
            >
              Buy
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
