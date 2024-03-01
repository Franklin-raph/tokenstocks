import React from "react";
import { Link } from "react-router-dom";

export const NavDrop3 = () => {
  return (
    <div className="absolute top-[40px] -left-[380px] lg:-left-[350px] flex justify-center items-center gap-4 bg-dark-300 border border-dark-200 rounded-xl w-[730px] h-[140px] p-5">
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img src="/nav-drop8.svg" alt="" />
          <p className="text-[12px] text-white">About us</p>
        </div>
        <p className="text-[10px]">
          Discover the essence of Stobox as you explore our story.
        </p>
      </Link>
      {/*  */}
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img src="/nav-drop9.svg" alt="" />
          <p className="text-[12px] text-white">Contact us</p>
        </div>
        <p className="text-[10px]">
          Reach out at your convenience. We're here to connect and assist in any
          way we can.
        </p>
      </Link>
      {/*  */}
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img src="/productlogo4.svg" alt="" />
          <p className="text-[12px] text-white">Stobox Utility Token [STBU]</p>
        </div>
        <p className="text-[10px]">
          Explore the advantages of Stobox utility token, understanding its role
          within the ecosystem.
        </p>
      </Link>
      {/*  */}
      <Link
        to="/"
        className="flex flex-col gap-2 text-dark-200 hover:text-white transition-all duration-300"
      >
        <div className="flex items-center gap-1">
          <img className="w-[20px]" src="/productlogo1.svg" alt="" />
          <p className="text-[12px] text-white">Stobox Security Token [STBX]</p>
        </div>
        <p className="text-[10px]">
          Uncover the world of tokenized shares as we guide you through the
          benefits of our Security Token.
        </p>
      </Link>
      {/*  */}
    </div>
  );
};
