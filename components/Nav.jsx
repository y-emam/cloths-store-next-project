"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { signIn } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="flex flex-row w-full max-w-lg items-center justify-around">
        <Link className="navbar_link" href="/">
          Home
        </Link>
        <Link className="navbar_link" href="/products">
          Products
        </Link>
        <Link className="navbar_link" href="/about">
          About
        </Link>
        <button className="white_btn" onClick={() => signIn()}>
          Sign In
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
