import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useState } from "react";

export const Footer = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <div className="w-full">
      <div className="lg:h-[35rem] md:h-[35rem] h-[38rem] bg-black text-white text-center">
        <h4 className="tracking-widest pt-16 text-md font-semibold text-blue-500">
          JOIN THE SOLESEEKER NEWSLETTER
        </h4>
        <h1 className="md:w-[45rem] m-auto  text-3xl font-semibold leading-normal p-4">
          SIGN UP TO GET FIRST ACCESS AND UPDATES ABOUT PRODUCTS, EVENTS AND
          MORE.
        </h1>
        {!emailSubmitted ? (
          <form onSubmit={() => setEmailSubmitted(true)}>
            <input
              type="email"
              placeholder="ENTER EMAIL"
              size={30}
              className="text-center outline-none text-black bg-white py-3 px-2 mt-4"
            />
            <br />
            <button
              type="submit"
              className="py-2 px-20 mt-6 mb-16 bg-white text-black"
            >
              SUBMIT
            </button>
          </form>
        ) : null}
        {emailSubmitted ? (
          <p className="p-10 sm:pt-16 pt-10 md:w-[45rem] m-auto h-[192px]">
            Thank you for submitting your email to our newsletter! We appreciate
            your interest and look forward to keeping you updated with exciting
            news and updates.
          </p>
        ) : null}

        <div className="w-80 m-auto border border-white flex gap-6 justify-center py-6 px-20">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="bg-black text-5xl hover:scale-110 hover:text-blue-500 transition-all duration-100" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="bg-black text-5xl hover:scale-110 hover:text-blue-500 transition-all duration-100" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="bg-black text-5xl hover:scale-110 hover:text-blue-500 transition-all duration-100" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon className="bg-black text-5xl hover:scale-110 hover:text-blue-500 transition-all duration-100" />
          </a>
        </div>
      </div>
      <div>
        <h6 className="text-gray-500 text-sm text-center my-5">
          © 2023 SOLESEEKER. ALL RIGHTS RESERVED.
        </h6>
        <div className="flex gap-16 text-sm justify-center mb-8 ">
          <a
            href="#"
            className="text-gray-500 transition-all duration-150 hover:bg-black hover:text-white"
          >
            CORPORATE
          </a>
          <a
            href="#"
            className="text-gray-500 transition-all duration-150 hover:bg-black hover:text-white"
          >
            PRIVACY
          </a>
        </div>
      </div>
    </div>
  );
};
