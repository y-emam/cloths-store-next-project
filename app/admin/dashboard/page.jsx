"use client";

import useWindowSize from "@/utils/useWindowSize";
import React from "react";

const Dashboard = () => {
  const { width } = useWindowSize();

  return (
    <section className="w-full text-white items-center">
      {width < 1024 ? (
        <div className="text-center">
          <h1>Please open this website on PC</h1>
        </div>
      ) : (
        <div className="w-full h-lvh text-center">
          <h1 className="mt-auto text-5xl">Admin Dahsboard</h1>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
