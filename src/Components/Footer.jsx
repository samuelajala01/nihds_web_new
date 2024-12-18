import Link from "next/link";
import Image from "next/image";
import newbg from "../../public/assets/hero.png";
import logo from "../../public/assets/logo.png";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="text-black">
        <div className=" p-[5vw]">
          {/* major footer divisor */}
          <div className="block md:flex justify-around mb-24">
            <div className="md:flex-1 mb-4">
              <Image src={logo} className="w-60 md:w-80 m-auto relative top-[30%]" />
            </div>
            <div className="block md:flex md:flex-1 md:w-80 md:justify-around text-center md:text-balance">
              <ul className="">
                <li className="py-[0.7rem ] font-semibold">
                  <Link href="/">About</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Technology</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Resource</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Innovation</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Research</Link>
                </li>
              </ul>
              <ul>
                <li className="py-[0.7rem] font-semibold">
                  <Link href="/">Community</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Discussions</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Forums</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Webinars</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Inspiration</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Channels</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Brainstorms</Link>
                </li>
              </ul>
              <ul>
                <li className="py-[0.7rem] font-semibold">
                  <Link href="/">Membership</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Events</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Careers</Link>
                </li>
                <li className="py-[0.7rem]">
                  <Link href="/">Benefits</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-2 mt-30 py-4 px-[5vw]">
          <div className="flex mb-4">
            <p className="text-2xl px-1">
              <SlSocialInstagram />
            </p>
            <p className="text-2xl px-1">
              <FaLinkedinIn />
            </p>
            <p className="text-2xl px-1">
              <FaFacebook />
            </p>
            <p className="text-2xl px-1">
              <FaSquareXTwitter />
            </p>
          </div>
          <p>2024 NIHDS, all rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
