"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { data: session } = useSession();
  const router = useRouter();

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
        {session ? (
          <button className="white_btn" onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className="white_btn" onClick={() => router.push("/signin")}>
            Sign In
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
