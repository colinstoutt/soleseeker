import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-black text-white text-center">
        <h4 className="tracking-widest pt-16 text-md font-semibold text-blue-500">
          JOIN THE SOLESEEKER NEWSLETTER
        </h4>
        <h1 className="md:w-[45rem] m-auto  text-3xl font-semibold leading-normal px-4 pt-3">
          SIGN UP TO GET FIRST ACCESS AND UPDATES ABOUT PRODUCTS, EVENTS AND
          MORE.
        </h1>
        {!emailSubmitted ? (
          <form
            onSubmit={() => setEmailSubmitted(true)}
            className="flex justify-center m-10 pb-16"
          >
            <input
              type="email"
              placeholder="ENTER EMAIL"
              size={30}
              className="text-center outline-none text-black bg-white py-2 border-r border-gray-300 rounded-md"
            />
            <br />
            <button
              type="submit"
              className="bg-white text-black px-4 rounded-md ml-2 hover:bg-blue-500"
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
      </div>
      <div>
        <div className="m-auto flex gap-6 justify-center mt-10">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className=" text-5xl hover:scale-110 hover:text-blue-500 transition-all duration-100" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className=" text-5xl hover:scale-110 hover:text-blue-500 transition-all duration-100" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="btext-5xl hover:scale-110 hover:text-blue-500 transition-all duration-100" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon className="text-5xl hover:scale-110 hover:text-blue-500 transition-all duration-100" />
          </a>
        </div>
        <h6 className="text-gray-500 text-sm text-center my-5">
          © 2023 SOLESEEKER. ALL RIGHTS RESERVED.
        </h6>
        <div className="flex gap-16 text-sm justify-center mb-8 ">
          <Link
            to="/"
            className="text-gray-500 transition-all duration-150 hover:bg-black hover:text-white"
          >
            CORPORATE
          </Link>
          <Link
            to="/"
            className="text-gray-500 transition-all duration-150 hover:bg-black hover:text-white"
          >
            PRIVACY
          </Link>
        </div>
      </div>
    </div>
  );
};
