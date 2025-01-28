import SliderDiv from "@/Components/SliderDiv";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import HeroSection from "@/Components/HeroSection";
import PresQuote from "@/Components/PresQuote";
import SlidersSection from "@/Components/SlidersSection";
import SubscribeBlock from "@/Components/SubscribeBlock";
import MapSection from "@/Components/MapSection";
import ProQuote from "@/Components/ProQuote";
import InnovSection from "@/Components/InnovSection";
import CommunitySection from "@/Components/CommunitySection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ------------------- Quotes --------------------- */}

      <PresQuote />

      {/* ------------------- Sliders --------------------- */}

      <SlidersSection />

      {/* ------------------- Explore Endless possibilities --------------------- */}

      <MapSection />

      {/* ------------------- Innovations --------------------- */}

      <InnovSection/>

      <CommunitySection/>

      <ProQuote />

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
      <SubscribeBlock />
    </>
  );
}
