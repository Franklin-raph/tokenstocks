import { useState } from "react";
import img1 from "../../assets/images/img1.webp";
import img2 from "../../assets/images/img2.webp";
import img3 from "../../assets/images/img3.webp";
// import img4 from "../../assets/images/img1.svg";
// import img5 from "../../assets/images/img2.svg";
// import img6 from "../../assets/images/img7.svg";
// import img7 from "../../assets/images/img3.png";
// import img8 from "../../assets/images/img4.svg";
// import img9 from "../../assets/images/img5.svg";
// import img10 from "../../assets/images/img6.svg";
import { Link } from "react-router-dom";
import { ChevronDown } from "../../icons/chevron";
import { MotionDiv, MotionPresence } from "../../utils/motion-exports";

const Home = () => {
  const [accordion, setAccordion] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });
  //
  return (
    <div>
      <div className="bg-img mb-12">
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <p className="text-[#2998FF]">TECHNOLOGY AND SERVICE PROVIDER</p>
          <h1 className="text-[3.75rem] text-white leading-[65px] mt-3">
            Top-tier turnkey{" "}
            <span className="font-[600]">tokenization provider</span>{" "}
          </h1>
          <p className="text-[#979fa8] text-[1rem] mt-3">
            Stobox is an award-winning tokenization company that provides
            technology and consulting to help clients leverage digital assets
            and tokenized securities.
          </p>
          <button className="bg-[#2998FF] mt-5 py-[0.875rem] px-[1.5rem] w-[11.25rem] rounded-[0.6875rem] text-white">
            Learn More
          </button>
          <div className="flex items-center justify-center gap-[3rem] mt-[4rem] text-[#979fa8]">
            <div className="flex items-center justify-center flex-col">
              <img src={img1} alt="" className="w-[8.125rem]" />
              <p className="text-[.625rem]">Best STO Platform 2019</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img src={img2} alt="" className="w-[8.125rem]" />
              <p className="text-[.625rem]">Best STO Platform 2019</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img src={img3} alt="" className="w-[8.125rem]" />
              <p className="text-[.625rem]">Best STO Platform 2019</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-[3rem] flex items-start justify-between w-[90%] mx-auto">
        <div className="w-[500px]">
          <p className="text-[#2998FF] mb-2">TOKENIZATION WITH STOBOX</p>
          <p className="text-[#20242e] text-[32px]">
            Securities <span className="font-[600]">issuance</span>,{" "}
            <span className="font-[600]">management</span>, and{" "}
            <span className="font-[600]">trading</span> on a blockchain
          </p>
          <p className="text-[#979fa8] my-3">
            Tokenization as a cutting-edge technology that optimizes and
            simplifies the process of issuing corporate securities on the
            blockchain.
          </p>
          <p className="text-[#979fa8]">
            Tokenization brings efficiency to the traditionally complex issuance
            of securities by leveraging blockchain technology, offering a more
            streamlined and technologically advanced approach to the entire
            process.
          </p>
        </div>
        <div className="w-[600px] grid grid-cols-2 gap-[24px]">
          <div>
            <p className="text-[#456ab8] ml-7 text-[32px] font-medium mb-4">
              11
            </p>
            <p
              className="text-[#979fa8] pl-7 text-[13px]"
              style={{ borderLeft: "1px solid #2998FF" }}
            >
              Successfully tokenized enterprises from various jurisdictions: US,
              Canada, Europe, and the UK.
            </p>
          </div>
          <div>
            <p className="text-[#2998ff] ml-7 text-[32px] font-medium mb-4">
              61
            </p>
            <p
              className="text-[#979fa8] pl-7 text-[13px]"
              style={{ borderLeft: "1px solid #2998FF" }}
            >
              A growing number of clients are engaging into assets tokenization.
              From early-stage consulting to STO execution monitoring.
            </p>
          </div>
          <div>
            <p className="text-[#456ab8] ml-7 text-[32px] font-medium mb-4">
              18,450
            </p>
            <p
              className="text-[#979fa8] pl-7 text-[13px]"
              style={{ borderLeft: "1px solid #2998FF" }}
            >
              A growing community of both accredited and retail registered
              investors exploring Real World Assets tokenization.
            </p>
          </div>
          <div>
            <p className="text-[#2998ff] ml-7 text-[32px] font-medium mb-4">
              4
            </p>
            <p
              className="text-[#979fa8] pl-7 text-[13px]"
              style={{ borderLeft: "1px solid #2998FF" }}
            >
              The team has designed, developed, and currently manages a number
              of blockchain-based products.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className='flex items-center justify-between my-[4rem] w-[65%] mx-auto'>
            <img src={img4} className='w-[100px]' alt="" />
            <img src={img5} className='w-[100px]' alt="" />
            <img src={img6} className='w-[100px]' alt="" />
            <img src={img7} className='w-[100px]' alt="" />
            <img src={img8} className='w-[100px]' alt="" />
            <img src={img9} className='w-[100px]' alt="" />
            <img src={img10} className='w-[100px]' alt="" />
        </div> */}
      {/*  */}
      {/* End to end tokenization Section */}
      <div className="relative mb-12 mt-24 w-[90%] md:w-[88%] mx-auto">
        <div className="w-[95%] min-[950px]:w-[900px] mx-auto">
          <h2 className="text-center text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px]">
            <span className="font-bold">End-to-end </span>tokenization
            management
          </h2>
          <p className="text-center text-dark-200 text-base sm:text-lg md:text-xl">
            Stobox serves as your strategic partner, adeptly managing the
            end-to-end process to ensure the continual and seamless delivery of
            business operations.
          </p>
        </div>
        {/*  */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 min-[1040px]:grid-cols-3 justify-items-center items-stretch gap-5">
          <div className="end-to-end-token-cards">
            <div className="flex flex-col gap-1">
              <h4 className="text-[18px] md:text-[24px] font-semibold">
                Tokenization / STOP Consulting
              </h4>
              <p className="text-[14px] md:text-base text-dark-200 tracking-wide">
                We determine the right structure to tokenize your assets, help
                you choose the right jurisdiction, and prepare the roadmap.
              </p>
            </div>
            <img
              src="/end-to-end1.webp"
              alt="end to end image 1"
              className="self-end w-[300px] my-4 -mr-16"
            />
            <Link to="/" className="primary-btn-1 self-start mt-auto">
              Learn More
            </Link>
            <img
              className="absolute bottom-0 -z-10"
              src="/end-to-end-gradient.png"
              alt="gradient color for the card"
            />
          </div>
          {/*  */}
          <div className="end-to-end-token-cards">
            <div className="flex flex-col gap-1">
              <h4 className="text-[18px] md:text-[24px] font-semibold">
                Legal Management
              </h4>
              <p className="text-[14px] md:text-base text-dark-200 tracking-wide">
                We provide help with all legal preparations for issuing and
                offering virtual assets: company incorporation, preparation of
                documents, etc.
              </p>
            </div>
            <img
              src="/end-to-end2.webp"
              alt="end to end image 2"
              className="self-end w-[250px] my-4 -mr-12"
            />
            <Link to="/" className="primary-btn-1 self-start mt-auto">
              Learn More
            </Link>
            <img
              className="absolute bottom-0 -z-10"
              src="/end-to-end-gradient.png"
              alt="gradient color for the card"
            />
          </div>
          {/*  */}
          <div className="end-to-end-token-cards">
            <div className="flex flex-col gap-1">
              <h4 className="text-[18px] md:text-[24px] font-semibold">
                Digital assets consulting
              </h4>
              <p className="text-[14px] md:text-base text-dark-200 tracking-wide">
                We find the best way to improve your costumer relationships with
                digital assets and assist with preparation for the issuance.
              </p>
            </div>
            <img
              src="/end-to-end3.webp"
              alt="end to end image 3"
              className="self-end w-[250px] my-4 -mr-20"
            />
            <Link to="/" className="primary-btn-1 self-start mt-auto">
              Learn More
            </Link>
            <img
              className="absolute bottom-0 -z-10"
              src="/end-to-end-gradient.png"
              alt="gradient color for the card"
            />
          </div>
          {/*  */}
        </div>
        <img
          className="absolute -bottom-[60px] -left-[140px] -z-10"
          src="/end-to-end-gradient.png"
          alt="gradient color for the card"
        />
      </div>
      {/*  */}
      {/* Storebox technologies and products section */}
      <div className="mt-[120px] mb-12">
        <div className="w-[95%] min-[950px]:w-[900px] mx-auto">
          <p className="text-center text-primary-100 text-base sm:text-lg">
            STOBOX TECHNOLOGIES AND PRODUCTS
          </p>
          <h2 className="text-center text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px]">
            <span className="font-bold">Blockchain-based products </span>
            for the tokenization of your business
          </h2>
          <p className="text-center text-dark-200 text-base sm:text-lg md:text-xl">
            Exploring these blockchain products reveals solutions for better
            asset management, transparency, and accessibility in your business.
          </p>
        </div>
        {/* stobox product cards */}
        <div className="w-[95%] md:w-[88%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 min-[1040px]:grid-cols-3 justify-items-center items-stretch gap-5">
          <div className="stobox-product-cards bg-product1bg">
            <img
              src="/product1img.webp"
              alt=""
              className="w-[80%] h-[280px] ml-auto -mr-10"
            />
            <div className="flex flex-col gap-2 mt-5">
              <img src="/productlogo1.svg" className="w-[60px]" alt="" />
              <h3 className="text-[24px] text-white">DS Dashboard</h3>
              <p className="text-white/40 text-[14px] tracking-wide">
                Primary solution for issuing, managing, and transfer of security
                tokens.
              </p>
              <Link
                to="/"
                className="primary-btn-1 self-start !text-white !shadow-white"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="stobox-product-cards bg-product2bg">
            <img
              src="/product2img.webp"
              alt=""
              className="w-[80%] h-[280px] ml-auto -mr-10"
            />
            <div className="flex flex-col gap-2 mt-5">
              <img src="/productlogo2.svg" className="w-[60px]" alt="" />
              <h3 className="text-[24px] text-white">Soulbound ID</h3>
              <p className="text-white/40 text-[14px] tracking-wide">
                Blockchain-based identities for legally compliant security
                tokens and DeFi
              </p>
              <Link
                to="/"
                className="primary-btn-1 self-start !text-white !shadow-white"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="stobox-product-cards bg-product3bg">
            <img
              src="/product3img.webp"
              alt=""
              className="w-[80%] h-[280px] ml-auto -mr-10"
            />
            <div className="flex flex-col gap-2 mt-5">
              <img src="/productlogo3.svg" className="w-[60px]" alt="" />
              <h3 className="text-[24px] text-white">DS Swap</h3>
              <p className="text-white/40 text-[14px] tracking-wide">
                Decentralized secondary market for security tokens. Unique DeFi
                liquidity solution
              </p>
              <Link
                to="/"
                className="primary-btn-1 self-start !text-white !shadow-white"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* Steps to your tokenization section */}

      {/* CTA section */}
      <div className="my-[100px] bg-cta1bg bg-center bg-cover bg-no-repeat py-8 px-8 rounded-2xl w-[95%] sm:w-[85%] md:w-[78%] h-[180px] mx-auto flex flex-col 476:flex-row justify-between items-center gap-6">
        <h2 className="w-[78%] text-center 476:text-left md:w-[680px] lg:w-[800px] text-white text-[14px] 476:text-[16px] sm:text-[20px] md:text-[26px] font-medium">
          <span className="font-bold">Schedule a 30-min consultation on</span>
          &nbsp;how to leverage tokenization for your business
        </h2>
        <Link
          to="/"
          className="w-[150px] whitespace-nowrap flex justify-center items-center py-3 px-3 text-white bg-primary-100 rounded-md font-semibold tracking-wider"
        >
          Book a call
        </Link>
      </div>

      {/* Growing interest section */}
      <div className="w-[90%] md:w-[88%] mx-auto mb-[100px]">
        <div className="w-full md:w-[90%] mx-auto flex flex-col gap-1">
          <h4 className="uppercase text-primary-100 font-semibold text-[14px] md:text-base tracking-wider">
            Growing Interest
          </h4>
          <h2 className="w-full sm:w-[500px] md:w-[600px] text-dark-100 text-[18px] md:text-[24px] lg:text-[36px] font-medium">
            Various investors are&nbsp;
            <span className="font-bold">exploring</span>&nbsp;the possibilities
            of&nbsp;
            <span className="font-bold">tokenization</span>
          </h2>
        </div>
        {/*  */}
        <div className="w-full md:w-[90%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {/* accordion 1 */}
            <div
              className="pb-3 border-b"
              onClick={() => setAccordion({ one: !accordion.one })}
            >
              <div className="flex justify-between items-center cursor-pointer pb-2">
                <p className="text-dark-100/90 text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
                  Retail Investors
                </p>
                <ChevronDown
                  className={`size-7 transition-all duration-500 ${
                    accordion?.one
                      ? "rotate-180 !stroke-cyan-500 fill-green-500"
                      : ""
                  }`}
                />
              </div>
              <MotionPresence>
                {accordion?.one && (
                  <MotionDiv
                    className="overflow-hidden text-dark-200 text-[12px] sm:text-[14px] md:text-base tracking-wide"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                  >
                    Individual investors who actively participate in financial
                    markets and may be drawn to tokenized assets for their
                    accessibility, fractional ownership opportunities, potential
                    liquidity benefits, and the ease of trading and management.
                  </MotionDiv>
                )}
              </MotionPresence>
            </div>
            {/* accordion 2 */}
            <div
              className="pb-3 border-b"
              onClick={() => setAccordion({ two: !accordion.two })}
            >
              <div className="flex justify-between items-center cursor-pointer pb-2">
                <p className="text-dark-100/90 text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
                  Accredited Investors
                </p>
                <ChevronDown
                  className={`size-7 transition-all duration-500 ${
                    accordion?.two
                      ? "rotate-180 !stroke-cyan-500 fill-green-500"
                      : ""
                  }`}
                />
              </div>
              <MotionPresence>
                {accordion?.two && (
                  <MotionDiv
                    className="overflow-hidden text-dark-200 text-[12px] sm:text-[14px] md:text-base tracking-wide"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                  >
                    Investors meeting specific criteria, attracted to tokenized
                    assets for their potential returns, portfolio
                    diversification, the ability to engage in private market
                    opportunities, and the ease of trading and managing these
                    assets.
                  </MotionDiv>
                )}
              </MotionPresence>
            </div>
            {/* accordion 3 */}
            <div
              className="pb-3 border-b"
              onClick={() => setAccordion({ three: !accordion.three })}
            >
              <div className="flex justify-between items-center cursor-pointer pb-2">
                <p className="text-dark-100/90 text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
                  Asset and Portfolio Managers
                </p>
                <ChevronDown
                  className={`size-7 transition-all duration-500 ${
                    accordion?.three
                      ? "rotate-180 !stroke-cyan-500 fill-green-500"
                      : ""
                  }`}
                />
              </div>
              <MotionPresence>
                {accordion?.three && (
                  <MotionDiv
                    className="overflow-hidden text-dark-200 text-[12px] sm:text-[14px] md:text-base tracking-wide"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                  >
                    Professionals responsible for managing investments,
                    utilizing tokenized assets for streamlined portfolio
                    management, increased efficiency, cost savings, and the ease
                    of trading and managing these tokenized assets.
                  </MotionDiv>
                )}
              </MotionPresence>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-8">
            {/* accordion 4 */}
            <div
              className="pb-3 border-b"
              onClick={() => setAccordion({ four: !accordion.four })}
            >
              <div className="flex justify-between items-center cursor-pointer pb-2">
                <p className="text-dark-100/90 text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
                  High-Net-Worth Individuals (HNWIs)
                </p>
                <ChevronDown
                  className={`size-7 transition-all duration-500 ${
                    accordion?.four
                      ? "rotate-180 !stroke-cyan-500 fill-green-500"
                      : ""
                  }`}
                />
              </div>
              <MotionPresence>
                {accordion?.four && (
                  <MotionDiv
                    className="overflow-hidden text-dark-200 text-[12px] sm:text-[14px] md:text-base tracking-wide"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                  >
                    Affluent individuals with substantial financial assets,
                    interested in tokenized assets for diversification,
                    efficient wealth management, access to exclusive investment
                    opportunities, and the ease of trading and managing these
                    tokenized assets.
                  </MotionDiv>
                )}
              </MotionPresence>
            </div>
            {/* accordion 5 */}
            <div
              className="pb-3 border-b"
              onClick={() => setAccordion({ five: !accordion.five })}
            >
              <div className="flex justify-between items-center cursor-pointer pb-2">
                <p className="text-dark-100/90 text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
                  Private Investors
                </p>
                <ChevronDown
                  className={`size-7 transition-all duration-500 ${
                    accordion?.five
                      ? "rotate-180 !stroke-cyan-500 fill-green-500"
                      : ""
                  }`}
                />
              </div>
              <MotionPresence>
                {accordion?.five && (
                  <MotionDiv
                    className="overflow-hidden text-dark-200 text-[12px] sm:text-[14px] md:text-base tracking-wide"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                  >
                    Individuals or entities investing in various asset classes,
                    including tokenized assets, for increased transparency,
                    liquidity, potential for enhanced control over their
                    investment portfolios, and the ease of trading and
                    management.
                  </MotionDiv>
                )}
              </MotionPresence>
            </div>
            {/* accordion 6 */}
            <div
              className="pb-3 border-b"
              onClick={() => setAccordion({ six: !accordion.six })}
            >
              <div className="flex justify-between items-center cursor-pointer pb-2">
                <p className="text-dark-100/90 text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
                  Institutional Investors
                </p>
                <ChevronDown
                  className={`size-7 transition-all duration-500 ${
                    accordion?.six
                      ? "rotate-180 !stroke-cyan-500 fill-green-500"
                      : ""
                  }`}
                />
              </div>
              <MotionPresence>
                {accordion?.six && (
                  <MotionDiv
                    className="overflow-hidden text-dark-200 text-[12px] sm:text-[14px] md:text-base tracking-wide"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                  >
                    Organizations investing in tokenized assets for improved
                    liquidity, reduced transaction costs, access to a broader
                    range of investment opportunities, and the ease of trading
                    and managing these digital assets.
                  </MotionDiv>
                )}
              </MotionPresence>
            </div>
          </div>
        </div>
      </div>

      {/* best stories section */}
      <div className="w-[90%] md:w-[88%] mx-auto mb-[100px]">
        <div className="w-full md:w-[90%] mx-auto flex flex-col gap-1">
          <h4 className="uppercase text-primary-100 font-semibold text-[14px] md:text-base tracking-wider">
            Best Stories
          </h4>
          <h2 className="w-full sm:w-[500px] md:w-[600px] text-dark-100 text-[18px] md:text-[24px] lg:text-[36px] font-medium">
            Tokenization cases&nbsp;
            <span className="font-bold">with Stobox</span>
          </h2>
          <p className="w-full sm:w-[500px] md:w-[600px] text-dark-200 text-[14px] sm:text-base">
            Various successful use cases and success stories related to the
            tokenization of real-world assets through security tokens.
          </p>
        </div>
      </div>

      {/* Building trust partners section */}

      {/* end of home page... */}
    </div>
  );
};

export default Home;
