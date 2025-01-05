import SliderDiv from "@/Components/SliderDiv";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import HeroSection from "@/Components/HeroSection";
import PresQuote from "@/Components/PresQuote";
import SlidersSection from "@/Components/SlidersSection";
import MapSection from "@/Components/MapSection";
import ProQuote from "@/Components/ProQuote";
import SubscribeBlock from "@/Components/SubscribeBlock";

export default function Home() {
  return (
    <>
      <HeroSection/>

      {/* ------------------- Quotes --------------------- */}

     <PresQuote/>

      {/* ------------------- Sliders --------------------- */}

      <SlidersSection/>

      {/* ------------------- Explore Endless possibilities --------------------- */}

      <MapSection/>

      {/* ------------------- Innovations --------------------- */}

      <section className="m-[6vw]">
        <h2 className="font-bold text-2xl md:text-4xl">Innovations</h2>
        <p className="my-4 sm:max-w-[50vw]">
          Our community brings together hardware developers, startup founders,
          entrepreneurs, and AI engineers to share knowledge, solve challenges,
          and foster innovation
        </p>
        <button className="border-black border-2 py-2 px-4 rounded-xl inline-flex">
          Explore Innovators insights
          <span className="relative top-[0.3rem] left-[0.4rem]">
            <FaArrowRight />
          </span>
        </button>
        <div className="border-4 border-blue-600 my-4">
          <Image
            src="/assets/image-2.png"
            alt="description"
            width={100}
            height={100}
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
          />
        </div>
      </section>

      <section className="bg-gray-600 p-[6vw] text-white">
        <p className="">NIHDS Community</p>
        <h2 className="my-4 font-semibold text-5xl md:max-w-[40vw]">
          Connect to our AI community platforms
        </h2>
        <p className="md:max-w-[45vw]">
          Join our community and connect with like-minded individuals dedicated
          to advancing health and wellness through innovation. Stay informed,
          share insights, and be part of the future of health technology.
        </p>
        <div className="flex my-2 justify-between">
          <div className="rounded-lg p-4 flex-shrink-0 text-white">
            <Image
              src="/assets/image-2.png"
              alt="description"
              width={100}
              height={100}
              className="w-[200px] h-[200px] sm:w-[300px] sm:h-[150px] md:max-w-[220px]"
            />
            <div className="text-center">
              <p className="font-semibold mt-4">Free Community</p>
              <p className="text-xs mx-auto w-[200px] text-center my-2">
                Connect with like minds to get tips on our AI trends
              </p>

              <button className="border-2 rounded-md border-white mt-2">
                <p className="p-2">Join our free community</p>
              </button>
            </div>
          </div>
          <div className="rounded-lg p-4 flex-shrink-0 bg-white text-black">
            <Image
              src="/assets/image-2.png"
              alt="description"
              width={100}
              height={100}
              className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[220px]"
            />
            <div className="text-center">
              <p className="font-semibold mt-4 mb-2">Online Community</p>
              <p className="text-xs">Join our Community</p>
            </div>
          </div>

          <div className="rounded-lg p-2 flex-shrink-0 bg-white text-black">
            <Image
              src="/assets/image-2.png"
              alt="description"
              width={100}
              height={100}
              className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[220px]"
            />
            <div className="text-center">
              <p className="font-semibold mt-4 mb-2">AI trends</p>
              <p className="text-xs">Connect with the like-minded</p>
            </div>
          </div>
          <div className="rounded-lg p-2 flex-shrink-0 bg-white text-black">
            <Image
              src="/assets/IOT CARD.png"
              alt="description"
              width={100}
              height={100}
              className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[220px]"
            />
            <div className="text-center">
              <p className="font-medium mt-4 mb-2">Blogs</p>
              <p className="text-xs">Get insights on advanced tools</p>
            </div>
          </div>
        </div>
      </section>

      <ProQuote/>

      <section className="p-[4vw] text-center">

        <div className="bg-[#F8F8FF] p-16 rounded-[30px]">
          <h3 className="text-black text-2xl md:text-4xl mx-[12vw] md:mx-[16vw] lg:mx-[25vw] font-semibold mb-8">
            Connect with innovative minds
          </h3>
          <button className="bg-black text-white py-4 px-6 rounded-xl inline-flex">
            Join Our Community
            <span className="relative top-[0.4rem] left-[0.4rem]">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </section>

      {/* ------------------- Newsletter --------------------- */}
      <SubscribeBlock/>
    </>
  );
}
