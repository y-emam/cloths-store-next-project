import { Covered_By_Your_Grace } from "next/font/google";
import React from "react";

const font = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = ({size}) => {
  return (
    <span className={`${font.className} ${size}`}>YASUO</span>
  );
};

export default Logo;
