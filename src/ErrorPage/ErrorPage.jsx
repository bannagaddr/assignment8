import React from "react";
import pageNotFound from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="p-3 sm:p-10 inter mx-auto flex items-center justify-center flex-col gap-5">
      <img src={pageNotFound} alt="" className="w-70" />
      <p className="font-bold text-5xl">Oops, page not found!</p>
      <p>The page you are looking for is not available.</p>
      <Link to="/home">
        <button className="btn btn-primary">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
