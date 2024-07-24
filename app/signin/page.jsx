"use client";

import SigninForm from "@/components/SigninForm";
import { signIn, useSession } from "next-auth/react";
import React from "react";

const SignIn = () => {
  const { data: session } = useSession();

  return <SigninForm page={"signIn"} />;
};

export default SignIn;
