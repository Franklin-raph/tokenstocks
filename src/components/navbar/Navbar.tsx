import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BarsIcon } from "../../icons/bars";
import { CloseIcon } from "../../icons/close";
import { MotionDiv, MotionPresence } from "../../utils/motion-exports";
import { ChevronDown } from "../../icons/chevron";
import { NavDrop1 } from "../minor/nav-drop1";
import { NavDrop2 } from "../minor/nav-drop2";
import { NavDrop3 } from "../minor/nav-drop3";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  //
  const [showDrop, setShowDrop] = useState<any>({
    one: false,
    two: false,
    three: false,
  });

  //
  return (
    <div className="flex items-center justify-between px-[3.5rem] py-[1.2rem] bg-[#011023] text-white fixed w-full z-[999]">
      <Link to="/">Logo</Link>
      <ul className="hidden 887:flex items-center justify-between gap-[3.5rem]">
        <li
          className="relative"
          onMouseEnter={() => setShowDrop({ one: true })}
          onMouseLeave={() => setShowDrop({ one: false })}
        >
          {/* <Link to="/services">Services</Link> */}
          <div className="flex items-center gap-2 cursor-pointer py-2">
            <p>Services</p>
            <ChevronDown className="size-5 stroke-light-100" />
          </div>
          {/*  */}
          {showDrop.one && <NavDrop1 />}
        </li>
        <li
          className="relative"
          onMouseEnter={() => setShowDrop({ two: true })}
          onMouseLeave={() => setShowDrop({ two: false })}
        >
          {/* <Link to="/solutions">Solutions</Link> */}
          <div className="flex items-center gap-2 cursor-pointer py-2">
            <p>Solutions</p>
            <ChevronDown className="size-5 stroke-light-100" />
          </div>
          {/*  */}
          {showDrop.two && <NavDrop2 />}
        </li>
        <li
          className="relative"
          onMouseEnter={() => setShowDrop({ three: true })}
          onMouseLeave={() => setShowDrop({ three: false })}
        >
          {/* <Link to="/about">Company</Link> */}
          <div className="flex items-center gap-2 cursor-pointer py-2">
            <p>Company</p>
            <ChevronDown className="size-5 stroke-light-100" />
          </div>
          {/*  */}
          {showDrop.three && <NavDrop3 />}
        </li>
        <li>
          <Link to="/about">Blog</Link>
        </li>
      </ul>
      <MotionPresence>
        {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />}
      </MotionPresence>
      <button className="hidden 887:inline-block  bg-[#2998FF] text-white py-2 px-6 rounded-[9px]">
        Book a call
      </button>
      <BarsIcon
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="block 887:hidden"
      />
    </div>
  );
};

export default Navbar;

export const MobileNav = ({
  setShowMobileNav,
}: {
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [accordion, setAccordion] = useState<any>({
    services: false,
    products: false,
    solutions: false,
    company: false,
    // blog: false,
  });
  //
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-[999] top-0 left-0 bottom-0 right-0 w-full h-full py-5 px-6 bg-dark-300/[0.98] backdrop-blur-[4px] flex 887:hidden flex-col gap-5"
    >
      <div className="flex items-center justify-between">
        <img src="/footer-logo1.svg" alt="" />
        <CloseIcon onClick={() => setShowMobileNav(false)} />
      </div>
      {/* mobile nav links */}
      {/* nav link 1 */}
      <div className="flex flex-col gap-4 pb-4 border-b border-b-light-300/30 mt-12">
        <div
          className="flex items-center justify-between"
          onClick={() => setAccordion({ services: !accordion.services })}
        >
          <p
            className={`text-lg tracking-wide transition-all duration-500 ${
              accordion.services && "text-primary-100"
            }`}
          >
            Services
          </p>
          <ChevronDown
            className={`transition-all duration-500 ${
              accordion.services ? "rotate-180 stroke-primary-100" : "rotate-0"
            }`}
          />
        </div>
        <MotionPresence>
          {accordion.services && (
            <MotionDiv
              className="flex flex-col gap-3 overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img src="/services-logo1.svg" alt="" />
                <p>Tokenization consulting</p>
              </Link>
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img src="/services-logo2.svg" alt="" />
                <p>Legal support for tokenization</p>
              </Link>
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img src="/services-logo1.svg" alt="" />
                <p>Digital assets consulting</p>
              </Link>
            </MotionDiv>
          )}
        </MotionPresence>
      </div>
      {/*  */}
      {/* nav link 2 */}
      <div className="flex flex-col gap-4 pb-4 border-b border-b-light-300/30 mt-4">
        <div
          className="flex items-center justify-between"
          onClick={() => setAccordion({ products: !accordion.products })}
        >
          <p
            className={`text-lg tracking-wide transition-all duration-500 ${
              accordion.products && "text-primary-100"
            }`}
          >
            Products
          </p>
          <ChevronDown
            className={`transition-all duration-500 ${
              accordion.products ? "rotate-180 stroke-primary-100" : "rotate-0"
            }`}
          />
        </div>
        <MotionPresence>
          {accordion.products && (
            <MotionDiv
              className="flex flex-col gap-4 overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[25px]" src="/productlogo1.svg" alt="" />
                <p>DS Dashboard</p>
              </Link>
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[25px]" src="/productlogo2.svg" alt="" />
                <p>Soulbound ID</p>
              </Link>
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[25px]" src="/productlogo4.svg" alt="" />
                <p>DS Swap</p>
              </Link>
            </MotionDiv>
          )}
        </MotionPresence>
      </div>
      {/*  */}
      {/* nav link 3 */}
      <div className="flex flex-col gap-4 pb-4 border-b border-b-light-300/30 mt-4">
        <div
          className="flex items-center justify-between"
          onClick={() => setAccordion({ solutions: !accordion.solutions })}
        >
          <p
            className={`text-lg tracking-wide transition-all duration-500 ${
              accordion.solutions && "text-primary-100"
            }`}
          >
            Solutions
          </p>
          <ChevronDown
            className={`transition-all duration-500 ${
              accordion.solutions ? "rotate-180 stroke-primary-100" : "rotate-0"
            }`}
          />
        </div>
        <MotionPresence>
          {accordion.solutions && (
            <MotionDiv
              className="flex flex-col gap-4 overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[22px]" src="/solution-logo1.svg" alt="" />
                <p>Strategic three-phase STO</p>
              </Link>
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[22px]" src="/solution-logo2.svg" alt="" />
                <p>Real estate tokenization</p>
              </Link>
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[22px]" src="/solution-logo3.svg" alt="" />
                <p>Energy and natural resources</p>
              </Link>
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[22px]" src="/solution-logo4.svg" alt="" />
                <p>Financial services</p>
              </Link>
            </MotionDiv>
          )}
        </MotionPresence>
      </div>
      {/*  */}
      {/* nav link 4 */}
      <div className="flex flex-col gap-6 pb-4 border-b border-b-light-300/30 mt-4">
        <div
          className="flex items-center justify-between"
          onClick={() => setAccordion({ company: !accordion.company })}
        >
          <p
            className={`text-lg tracking-wide transition-all duration-500 ${
              accordion.company && "text-primary-100"
            }`}
          >
            Company
          </p>
          <ChevronDown
            className={`transition-all duration-500 ${
              accordion.company ? "rotate-180 stroke-primary-100" : "rotate-0"
            }`}
          />
        </div>
        <MotionPresence>
          {accordion.company && (
            <MotionDiv
              className="flex flex-col gap-4 overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[22px]" src="/company-logo1.svg" alt="" />
                <p>About us</p>
              </Link>
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[22px]" src="/company-logo2.svg" alt="" />
                <p>Contact us</p>
              </Link>
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[22px]" src="/productlogo4.svg" alt="" />
                <p>Stobox Utility Token [STBU]</p>
              </Link>
              <Link
                className="flex items-center gap-2 text-dark-200 tracking-wider"
                to="/"
              >
                <img className="w-[22px]" src="/productlogo1.svg" alt="" />
                <p>Stobox Security Token [STBX]</p>
              </Link>
            </MotionDiv>
          )}
        </MotionPresence>
      </div>
      {/*  */}
      <div className="flex justify-between items-center gap-3 mt-auto mb-4">
        <img src="/flag-1.svg" alt="" />
        <button className="w-full bg-primary-100 text-white px-6 py-4 rounded-lg">
          Book a call
        </button>
      </div>
    </MotionDiv>
  );
};
