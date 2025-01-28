import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const InnovSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Innovations
          </h2>

          <p className="text-lg max-w-xl">
            Our community brings together hardware developers, startup founders,
            entrepreneurs, and AI engineers to share knowledge, solve
            challenges, and foster innovation
          </p>

          <button className="group border-black border-2 py-2 px-4 rounded-xl inline-flex items-center hover:bg-black hover:text-white transition-colors duration-200">
            Explore Innovators insights
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
              <FaArrowRight />
            </span>
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/assets/image-2.png"
            alt="description"
            width={400}
            height={400}
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default InnovSection;
