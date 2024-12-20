const SliderDiv = ({
  title,
  img_1_path,
  img_2_path,
  img_3_path,
  img_4_path,
  img_5_path,
  desc_1,
  desc_2,
  desc_3,
  desc_4,
  desc_5,
}) => {
  return (
    <>
      {" "}
      <div className="mb-8">
        <div className="mx-[5vw]">
          <h2 className="text-black text-2xl">{title}</h2>
          <p>
            Our community brings together hardware developers, startup founders,
            entrepreneurs, and AI engineers to share knowledge, solve
            challenges, and foster innovation
          </p>
        </div>
        <div className="block sm:flex justify-around gap-2">
          <div
            className={`bg-[url('/public/assets/${img_1_path}')] bg-cover p-4`}
          >
            <p>{desc_1}</p>
          </div>
          <div
            className={`bg-[url('/public/assets/${img_2_path}')] bg-cover p-4`}
          >
            <p>{desc_2}</p>
          </div>
          <div
            className={`bg-[url('/public/assets/${img_3_path}')] bg-cover p-4`}
          >
            <p>{desc_3}</p>
          </div>
          <div
            className={`bg-[url('/public/assets/${img_4_path}')] bg-cover p-4`}
          >
            <p>{desc_4}</p>
          </div>
          <div
            className={`bg-[url('/public/assets/${img_5_path}')] bg-cover p-4`}
          >
            <p>{desc_5}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderDiv;
