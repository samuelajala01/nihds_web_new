const HeroSection = () => {
    return ( <>
    <section className="bg-[url('../../public/assets/hero.png')] m-auto text-center p-8 text-white">
        <h1 className="text-4xl md:text-[4.2vw] font-[600] mb-8 flex mx-auto lg:max-w-[60vw]  leading-tight">
          Empowering Innovators. Bridging Challenges. Building Community
        </h1>
        <p className="w-7/8 sm:w-3/5 md:w-1/2 m-auto my-8">
          Join a thriving network of hardware developers, founders, and AI
          engineers. Connect, collaborate, and unlock new opportunities
        </p>

        <button className="mb-16 text-blue-600 px-8 py-4 bg-white rounded-full font-semibold">
          Get Started
        </button>
      </section></> );
}
 
export default HeroSection;