import { Children } from "react";
import imgg from "../../public/assets/image-2.png";

const SliderDiv = ({ title, slider_desc }) => {
  return (
    <>
      <div className="mb-8">
        <div className="mx-[5vw]">
          <h2 className="text-black text-2xl">{title}</h2>
          <p>{slider_desc}</p>
        </div>
        
      </div>
    </>
  );
};

export default SliderDiv;
