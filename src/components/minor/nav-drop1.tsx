import React from "react";
import { Link } from "react-router-dom";

export const NavDrop1 = () => {
  return (
    <div className="absolute top-[40px] -left-16 flex justify-center items-center gap-4 bg-dark-300 border border-dark-200 rounded-xl w-[680px] h-[140px] p-5">
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img src="/nav-drop1.svg" alt="" />
          <p className="text-[12px] text-white">Tokenization consulting</p>
        </div>
        <p className="text-[10px]">
          Expert consulting for security token offerings and tokenization of
          real-world assets.
        </p>
      </Link>
      {/*  */}
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img src="/nav-drop2.svg" alt="" />
          <p className="text-[12px] text-white">
            Legal support for tokenization
          </p>
        </div>
        <p className="text-[10px]">
          Comprehensive legal consulting services for your business's
          tokenization.
        </p>
      </Link>
      {/*  */}
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img src="/nav-drop3.svg" alt="" />
          <p className="text-[12px] text-white">Digital assets consulting</p>
        </div>
        <p className="text-[10px]">
          Stobox presents compliant DeFi featuring security, utility, and
          governance tokens.
        </p>
      </Link>
      {/*  */}
    </div>
  );
};
