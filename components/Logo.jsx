import { Covered_By_Your_Grace } from "next/font/google";
import React from "react";

const font = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <div>
      <h3
        className={`${font.className} text-5xl mt-3 ml-3 cursor-pointer text-white`}
      >
        YASUO
      </h3>
    </div>
  );
};

export default Logo;
