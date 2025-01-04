import SliderDiv from "@/Components/SliderDiv";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-[url('../../public/assets/hero.png')] m-auto text-center p-8 text-white">
        <h1 className="text-4xl md:text-[5vw] font-semibold mb-8 w-fit lg:mx-48 leading-tight">
          Empowering Innovators. Bridging Challenges. Building Community
        </h1>
        <p className="w-7/8 sm:w-3/5 md:w-1/2 m-auto my-8">
          Join a thriving network of hardware developers, founders, and AI
          engineers. Connect, collaborate, and unlock new opportunities
        </p>

        <button className="mb-16 text-blue-600 px-8 py-4 bg-white rounded-full font-semibold">
          Get Started
        </button>
      </section>

      {/* ------------------- Quotes --------------------- */}

      <div className="text-center mx-[15vw] md:mx-[25vw] my-8">
        <quote className="text-black text-lg md:text-2xl">
          "When we come together, we can overcome any challenge and create
          endless opportunities. That's the power of community."
        </quote>
        <p>Kemisola Bolarinwa, President of NIHDS</p>
      </div>

      {/* ------------------- Sliders --------------------- */}

      <section className="w-fit p-8">
        <div className="mb-8">
          <div className="mx-[5vw]">
            <h2 className="text-black text-2xl">Our Focus</h2>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem officiis, debitis qui est ab labore enim laudantium
              architecto ducimus expedita nisi delectus hic quas. Et a maxime
              explicabo fugit soluta.
            </p>
          </div>
          <div className="w-screen -mx-[calc(50vw-50%)]">
            <div className="flex overflow-x-auto gap-4 pb-4 px-[5vw] scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/IOT CARD.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-1.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-3.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --------- AI Engineers ------- */}
        <div className="mb-8">
          <div className="mx-[5vw]">
            <h2 className="text-black text-2xl">AI Engineers</h2>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem officiis, debitis qui est ab labore enim laudantium
              architecto ducimus expedita nisi delectus hic quas. Et a maxime
              explicabo fugit soluta.
            </p>
          </div>
          <div className="w-screen -mx-[calc(50vw-50%)]">
          
            <div className="flex overflow-x-auto gap-4 pb-4 px-[5vw] scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/robot.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/Rectangle 2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/IOT CARD.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-3.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/HARDWARE CARD.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* --------- Robotics ------- */}
        <div className="mb-8">
          <div className="mx-[5vw]">
            <h2 className="text-black text-2xl">Robotics</h2>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem officiis, debitis qui est ab labore enim laudantium
              architecto ducimus expedita nisi delectus hic quas. Et a maxime
              explicabo fugit soluta.
            </p>
          </div>
          <div className="w-screen -mx-[calc(50vw-50%)]">
            <div className="flex overflow-x-auto gap-4 pb-4 px-[5vw] scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/IOT CARD.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-1.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-3.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
              <div className="border-4 p-2 flex-shrink-0">
                <Image
                  src="/assets/image-2.png"
                  alt="description"
                  width={100}
                  height={100}
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[225px] md:h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- Explore Endless possibilities --------------------- */}

      <section>
        <h3 className="text-center font-bold md:text-4xl mb-8">
          Explore Endless Possibilities
        </h3>
        <div className="flex m-auto">
          <Image
            src="/assets/community Image.png"
            alt=""
            width={100}
            height={100}
            className="w-[60vw] h-[200px] sm:h-[300px] md:w-[60vw] md:h-[400px] m-auto"
          />{" "}
        </div>
      </section>

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

      <section className="p-[4vw] text-center">
        <div className="mb-8 lg:mx-[9vw]">
          <h3 className="text-black text-lg md:text-2xl mb-2">
            By coming together, we unlock the strength to overcome challenges
            and create new opportunities. It's through collaboration and shared
            effort that we achieve more than we ever could alone. This is the
            real power of community
          </h3>
          <p className="text-gray-400">Michael Ojo, Public Relations Officer</p>
        </div>
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
      <section className="text-center text-black">
        <h2 className="text-4xl mb-8 font-semibold">
          Subscribe to our newsletter
        </h2>
        <p className="text-gray-500 mb-4">
          By signing up, you agree to receive awesome emails and updates.
        </p>
        <div className="bg-gray-200 flex justify-between md:max-w-[30vw] mx-auto rounded-full">
          <input
            className="bg-gray-200 px-6 py-2 rounded-full w-full"
            type="text"
            placeholder="your email address"
          />
          <button className="bg-black text-white py-2 px-4 rounded-full">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
}
