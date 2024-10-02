import SliderDiv from "@/Components/SliderDiv";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="bg-[url('../../public/assets/hero.png')] m-auto text-center p-8">
      <h1 className="text-4xl md:text-[5vw] font-semibold mb-8 w-fit lg:mx-48 leading-tight">Empowering Innovators. Bridging Challenges. Building Community</h1>
      <p className="w-7/8 sm:w-3/5 md:w-1/2 m-auto my-8">Join a thriving network of hardware developers, founders, and AI engineers. Connect, collaborate, and unlock new opportunities</p>

      <button className="mb-16 text-blue-600 px-8 py-4 bg-white rounded-full font-semibold">Get Started</button>
      </section>
      <div className="flex justify-between">
       <div className="bg-gray-400 border rounded-sm w-10 h-90">
        a
        </div>
        </div>

       <div className="text-center mx-[15vw] md:mx-[25vw] bg-red-400 mb-4"> <quote className="text-black text-lg md:text-2xl">"When we come together, we can overcome any challenge and create endless opportunities. That's the power of community."</quote>
       <p>Kemisola Bolarinwa, President of NIHDS</p></div>
 <SliderDiv title="Our Focus" />
 <SliderDiv title="AI Engineers" />
 <SliderDiv title="Robotics" />
 <section>
  <h3>Explore Endless Possibilities</h3>
  <div>div for image</div>
 </section>
<section>
  <h2>Innovations</h2>
  <p>Our community brings together hardware developers, startup founders, entrepreneurs, and AI engineers to share knowledge, solve challenges, and foster innovation</p>
  <button className="p-8">Explore Innovators Insights</button>
  <div>div for image</div>
</section>
    <section className="bg-gray-600 p-[4vw]"><p>NIHDS Community</p>
    <h2>Connect to our AI community platforms</h2>
    <p>Join our community and connect with like-minded individuals dedicated to advancing health and wellness through innovation. Stay informed, share insights, and be part of the future of health technology.</p></section>
    <section className="p-[4vw] text-center">
    <div className="mb-8 lg:mx-[9vw]"><h3 className="text-black text-lg md:text-2xl mb-2">By coming together, we unlock the strength to overcome challenges and create new opportunities. It's through collaboration and shared effort that we achieve more than we ever could alone. This is the real power of community</h3><p className="text-gray-400">Michael Ojo, Public Relations Officer</p></div>
    <div className="bg-blue-50 p-16">
      <h3 className="text-black text-4xl font-semibold mb-8">Connect with innovative minds</h3>
      <button className="bg-black p-4">Join Our Community</button>
    </div>
    </section>
    <section className="text-center text-black">
      <h2 className="text-4xl mb-8 font-semibold">Subscribe to our newsletter</h2>
      <p className="text-gray-500 mb-4">By signing up, you agree to receive awesome emails and updates.</p>
      <div><input className="bg-gray-200 p-2" type="text" placeholder="your email address"
      /><button className="bg-black text-white p-2">Subscribe</button></div>
    </section>
      </>
  );
}
