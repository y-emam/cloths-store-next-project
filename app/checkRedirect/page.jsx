/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CreateRedirect = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (session) {
        if (session.user && session.user.type === "admin")
          router.push("/admin/dashboard");
        else {
          router.push("/products");
        }
      } else {
        router.push("/signin");
      }
    }, 1000);
  }, [session]);

  return (
    <div className="w-full">
      <LoadingSpinner />
    </div>
  );
};

export default CreateRedirect;
