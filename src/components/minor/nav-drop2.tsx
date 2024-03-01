import React from "react";
import { Link } from "react-router-dom";

export const NavDrop2 = () => {
  return (
    <div className="absolute top-[40px] -left-[220px] lg:-left-[180px] flex justify-center items-center gap-4 bg-dark-300 border border-dark-200 rounded-xl w-[730px] h-[140px] p-5">
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img src="/nav-drop4.svg" alt="" />
          <p className="text-[12px] text-white">Strategic three-phase STO</p>
        </div>
        <p className="text-[10px]">
          Expertise in elevating businesses with comprehensive STO services.
        </p>
      </Link>
      {/*  */}
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img src="/nav-drop5.svg" alt="" />
          <p className="text-[12px] text-white">Real estate tokenization</p>
        </div>
        <p className="text-[10px]">
          Fundraise your real estate project via tokenization.
        </p>
      </Link>
      {/*  */}
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img src="/nav-drop6.svg" alt="" />
          <p className="text-[12px] text-white">Energy and natural resources</p>
        </div>
        <p className="text-[10px]">
          Attract investors to your natural resource business.
        </p>
      </Link>
      {/*  */}
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img src="/nav-drop7.svg" alt="" />
          <p className="text-[12px] text-white">Financial services</p>
        </div>
        <p className="text-[10px]">
          Revolutionizing financial sector businesses through tokenization.
        </p>
      </Link>
      {/*  */}
    </div>
  );
};
