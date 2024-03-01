import { DiscordIcon } from "../../icons/discord";
import { FacebookIcon } from "../../icons/facebook";
import { LinkedinIcon } from "../../icons/linkedin";
import { TelegramIcon } from "../../icons/telegram";
import { TwitterIcon } from "../../icons/twitter";
import { YoutubeIcon } from "../../icons/youtube";

const Footer = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center py-12 bg-footerBg bg-cover bg-center">
      <div className="w-[93%] md:w-[86%] mx-auto flex flex-wrap justify-between items-start gap-4 pb-8 border-b-[.5px] border-dark-200/50">
        <img src="/footer-logo1.svg" alt="footer light logo" />
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col items-start 476:items-center gap-2">
            <img
              className="w-[100px]"
              src="/footer-logo2.webp"
              alt="footer logo 2"
            />
            <small className="text-dark-200">Best STO Platform 2019</small>
          </div>
          {/*  */}
          <div className="flex flex-wrap flex-col items-start 476:items-center gap-2">
            <img
              className="w-[100px]"
              src="/footer-logo3.webp"
              alt="footer logo 3"
            />
            <small className="text-dark-200">
              The Most Promising Startup of the Year
            </small>
          </div>
          {/*  */}
          <div className="flex flex-wrap flex-col items-start 476:items-center gap-2">
            <img
              className="w-[70px]"
              src="/footer-logo4.webp"
              alt="footer logo 4"
            />
            <small className="text-dark-200">5 Years On The Market</small>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
      <div className="w-[93%] md:w-[86%] mx-auto mt-8 flex justify-between items-start flex-wrap gap-16">
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-lg text-light-400/80">Services</h4>
          <p className="text-lg text-dark-200/60">Tokenization Consulting</p>
          <p className="text-lg text-dark-200/60">Digital Asset Consulting</p>
          <p className="text-lg text-dark-200/60">Legal Management</p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-lg text-light-400/80">Products</h4>
          <p className="text-lg text-dark-200/60">DS Dashboard</p>
          <p className="text-lg text-dark-200/60">Soulbound</p>
          <p className="text-lg text-dark-200/60">Stobox DS Swap</p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-lg text-light-400/80">Solutions</h4>
          <p className="text-lg text-dark-200/60">Three-Phase STO</p>
          <p className="text-lg text-dark-200/60">Real Estate</p>
          <p className="text-lg text-dark-200/60">Natural Resources</p>
          <p className="text-lg text-dark-200/60">Financial services</p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-lg text-light-400/80">Company</h4>
          <p className="text-lg text-dark-200/60">About us</p>
          <p className="text-lg text-dark-200/60">Contact us</p>
          <p className="text-lg text-dark-200/60">
            Stobox Utility Token [STBU]
          </p>
          <p className="text-lg text-dark-200/60">
            Stobox Security Token [STBX]
          </p>
          <p className="text-lg text-dark-200/60">Blog</p>
        </div>
      </div>
      {/*  */}
      <div className="w-[93%] md:w-[86%] mx-auto mt-8 grid grid-cols-1 997:grid-cols-2 items-center gap-8 pb-6 border-b border-b-light-400/40">
        <p className="flex flex-col gap-3 text-lg text-dark-200/60">
          <span>
            Stobox Companies Group is not a registered broker-dealer, funding
            portal, underwriter, investment bank, investment adviser or
            investment manager, and is not providing brokerage, investment
            banking or underwriting services, recommendations or investment
            advice to any person, and does not provide any brokerage or
            cryptocurrency services. Stobox takes no part in the negotiation or
            execution of secondary market transactions for the purchase or sale
            of securities and at no time has possession of investor funds or
            securities in connection with such transactions.
          </span>
          <span>
            Stobox Companies Group was founded with the goal of utilizing
            distributed ledger technology to revolutionize financial
            technologies so that they are more efficient, accessible and
            transparent.
          </span>
        </p>
        <form className="flex flex-col gap-4 w-full">
          <h3 className="text-lg md:text-xl font-semibold text-light-200">
            Subscribe to our newsletter
          </h3>
          <label className="w-full flex items-center gap-2" htmlFor="email">
            <input
              className="footer-input bg-transparent border border-light-200/65"
              type="email"
              id="email"
            />
            <button className="min-w-[140px] h-[70px] bg-primary-100 text-white rounded-lg">
              Subscribe
            </button>
          </label>
        </form>
      </div>
      {/*  */}
      <div className="w-[93%] md:w-[86%] mx-auto mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-light-400/80">
            Registered address
          </h3>
          <p className="text-lg text-dark-200/60">
            1049 Brighton Beach, Brooklyn, NY, 11235, US
          </p>
        </div>
        {/*  */}
        <div className="flex justify-start gap-6 lg:gap-8 flex-wrap">
          <p className="text-lg text-dark-200/60">Privacy notice</p>
          <p className="text-lg text-dark-200/60">Terms of Use</p>
          <p className="text-lg text-dark-200/60">AML/KYC Policy</p>
          <p className="text-lg text-dark-200/60">Sitemap</p>
          <p className="text-lg text-dark-200/60">
            &copy; 2018 - <span>{new Date().getFullYear()}</span>&nbsp;Stobox
            Companies Group. All rights reserved.
          </p>
        </div>
        {/*  */}
        <div className="flex items-center gap-6 flex-wrap">
          <a
            className="size-8 flex justify-center items-center bg-primary-100 rounded-full"
            href="#"
          >
            <TelegramIcon />
          </a>
          {/*  */}
          <a
            className="size-8 flex justify-center items-center bg-primary-100 rounded-full"
            href="#"
          >
            <YoutubeIcon />
          </a>
          {/*  */}
          <a
            className="size-8 flex justify-center items-center bg-primary-100 rounded-full"
            href="#"
          >
            <FacebookIcon />
          </a>
          {/*  */}
          <a
            className="size-8 flex justify-center items-center bg-primary-100 rounded-full"
            href="#"
          >
            <TwitterIcon />
          </a>
          <a
            className="size-8 flex justify-center items-center bg-primary-100 rounded-full"
            href="#"
          >
            <LinkedinIcon />
          </a>
          <a
            className="size-8 flex justify-center items-center bg-primary-100 rounded-full"
            href="#"
          >
            <DiscordIcon />
          </a>
          {/*  */}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Footer;
