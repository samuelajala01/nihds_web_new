import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="flex m-auto justify-around p-6 bg-green-300">
        <div>
          <Image alt="Logo" className="" width={60} height={40} />
        </div>
        <ul className="flex gap-[4vw]">
          <li>Home</li>
          <li>About</li>
          <li> Events</li>
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
