import Image from "next/image";
import Logo from "../../public/assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex mx-auto gap-[4vw] justify-around py-6 px-8 bg-white w-fit absolute mt-8 left-[25vw] rounded-full">
        <div>
          <Image alt="Logo" className="" width={120} height={120} src={Logo} />
        </div>
        <ul className="flex gap-[4vw] items-center">
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Reources</li>
        </ul>
        <button className="bg-[#03045E] text-white rounded-md py-2 px-6">
          Join Now
        </button>
      </div>
    </>
  );
};

export default Navbar;
