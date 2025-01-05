import Image from "next/image";

const MapSection = () => {
  return (
    <>
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
    </>
  );
};

export default MapSection;
