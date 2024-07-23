import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center my-40">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
  );
};

export default LoadingSpinner;
