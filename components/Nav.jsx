"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const switchOpen = () => {
    setIsOpen((value) => !value);

  };
  
  return (
    <nav className="navbar relative flex items-center justify-between p-4 bg-black text-white">
      <Link href="/">
        <Logo size={"text-5xl"}/>
      </Link>
      <div className="block lg:hidden z-20">
        <button onClick={switchOpen} className="text-white focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                className="text-white bg-black"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.364 5.636l1.414 1.414L13.414 13l6.364 6.364-1.414 1.414L12 14.414 5.636 20.778 4.222 19.364 10.586 13 4.222 6.636l1.414-1.414L12 11.586l6.364-6.364z"
              />
            ) : (
              <path
                className="text-white"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`fixed z-10 top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center transition-transform transform lg:static lg:flex lg:flex-row lg:items-center lg:justify-around lg:w-full lg:max-w-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <li className="my-2 lg:my-0">
          <Link href="/" onClick={switchOpen}>
            Home
          </Link>
        </li>
        <li className="my-2 lg:my-0">
          <Link href="/products" onClick={switchOpen}>
            Products
          </Link>
        </li>
        <li className="my-2 lg:my-0">
          <Link href="/about" onClick={switchOpen}>
            About
          </Link>
        </li>
        <li className="my-2 lg:my-0">
          {session ? (
            <button className="white_btn" onClick={() => signOut()}>
              Sign Out
            </button>
          ) : (
            <button
              className="white_btn"
              onClick={() => {
                router.push("/signin");
                switchOpen();
              }}
            >
              Sign In
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
