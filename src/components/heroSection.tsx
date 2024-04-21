
import React from "react";
import Model from "./Model";
const HeroSection = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-2  gap-6">
        {/* left side  */}
        <div className="min-h-[40vh] flex flex-col justify-center ">
          <h1 className="text-4xl capitalize text-[#E21B70]">
            Fastest delivery and easy pickup
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            distinctio nostrum laboriosam eos. Laborum provident, nulla
            excepturi et sit modi culpa, veritatis obcaecati illo laudantium
            pariatur minus magni necessitatibus ducimus totam perspiciatis
            blanditiis voluptas amet dolorem nobis eos velit. Neque nihil
            quaerat ipsum, praesentium doloribus quod magni perspiciatis ut
            quae!
          </p>
          <button className="bg-[#E21B70] px-4 py-2 text-white rounded mt-4 self-start">
            Deliver now
          </button>
        </div>
        {/* right side  */}
        <Model />
      </div>
    </div>
  );
};

export default HeroSection;
