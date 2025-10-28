import React from "react";
import { FadeLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-3 sm:px-10 sm:py-10 inter mx-auto">
      <FadeLoader color="#632EE3" />
    </div>
  );
};

export default LoadingSpinner;
