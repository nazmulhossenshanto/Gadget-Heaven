import React from "react";
import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className=" z-0 flex flex-col items-center ">
      {/* main hero area */}
      <div className="bg-[#9538E2] w-full text-center text-white pt-2 pb-80 rounded-b-[40px] mb-60  z-10 ">
        <h1 className="text-4xl font-bold ">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="py-6 text-sm opacity-90">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have it all!
        </p>
        <button className="btn bg-white text-[#9538E2] rounded-full px-8 border-none font-semibold">
          Shop Now
        </button>
      </div>

      {/* banner image (overlapping section) */}
      <div className="absolute z-20 w-3/5 left-1/2 -translate-x-1/2 translate-y-[85%] rounded-2xl border-12 border-white/45">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-[400px] object-cover rounded-2xl shadow-2xl "
        />
      </div>
    </div>
  );
};

export default Hero;
