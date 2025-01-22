import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="bg-[url('../../public/assets/hero.png')] m-auto text-center p-8 text-white">
        <h1 className="text-4xl md:text-[4.2vw] font-[600] mt-40 mb-8 flex mx-auto lg:max-w-[60vw] leading-tight">
          Empowering Innovators. Bridging Challenges. Building Community
        </h1>
        <p className="w-7/8 sm:w-3/5 md:w-1/2 m-auto my-8">
          Join a thriving network of hardware developers, founders, and AI
          engineers. Connect, collaborate, and unlock new opportunities
        </p>

        <button className="mb-40 text-[#03045E] px-8 py-4 bg-white rounded-full font-semibold">
          Get Started
        </button>
      </section>
      <div className="flex justify-center relative bottom-32">
        <div className=" p-2 flex-shrink-0">
          <Image
            src="/assets/image-2.png"
            alt="description"
            width={100}
            height={100}
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
          />
        </div>
        <div className="p-2 flex-shrink-0">
          <Image
            src="/assets/ai-2.png"
            alt="description"
            width={100}
            height={100}
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
          />
        </div>
        <div className="p-2 flex-shrink-0">
          <Image
            src="/assets/ai-3.jpg"
            alt="description"
            width={100}
            height={100}
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
          />
        </div>
        <div className="p-2 flex-shrink-0">
          <Image
            src="/assets/ai-4.png"
            alt="description"
            width={100}
            height={100}
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
