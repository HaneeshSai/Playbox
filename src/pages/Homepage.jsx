import React from "react";
import cricket from "../assets/imgs/cricket.png";
import badminton from "../assets/imgs/badminton.png";
import basketball from "../assets/imgs/basketball.png";
import data from "../../data.json";
import BoxCard from "../components/BoxCard";

export default function Homepage() {
  return (
    <div className="h-full flex gap-32 flex-col">
      <div className="flex gap-20 ">
        <div className="flex-1 my-32  mx-20">
          <h1 className="text-3xl font-semibold">
            <span className="text-5xl leading-normal">PlayBoxx</span> <br />{" "}
            Finding Box Sports for you!
          </h1>
          <p className="text-xl font-medium leading-relaxed">
            We connect you with nearby Box sports and match you with the Perfect
            team!
          </p>

          <div className="flex gap-10">
            <button className="bg-[#FF6B35] my-5 text-white font-medium px-3 py-1 rounded">
              Book Your Spot Now
            </button>
            <button className="bg-[#269475] my-5 text-white font-medium px-3 py-1 rounded">
              Contact us
            </button>
          </div>
        </div>
        <div className="flex-1 z-10 relative mt-14 ">
          <img
            src={cricket}
            className="h-56 z-10 hover:scale-[1.1] duration-500 absolute "
            alt=""
          />
          <img
            src={badminton}
            alt=""
            className="h-44 z-10 hover:scale-[1.1] duration-500 left-64 top-32 absolute"
          />
          <img
            src={basketball}
            alt=""
            className="h-48 z-10 hover:scale-[1.1] duration-500 left-10 bottom-0 absolute"
          />
        </div>
      </div>
      <div className="px-24">
        <h1 className="text-3xl font-semibold">Nearest Box Sports Places.</h1>
        <p className="text-">
          <i className="fa-solid text-[#269475] mr-2 fa-circle-dot"></i>
          Hyderabad
        </p>
        <div className="grid mt-10 grid-cols-3 gap-10">
          {data.nearest.map((e, i) => (
            <BoxCard key={i} e={e} />
          ))}
        </div>
      </div>
      <div className="px-24 text-3xl font-semibold">
        <h1>Our Popular Sport Categories</h1>
        <div className="flex gap-10 mt-10">
          {data.categories.map((e, i) => (
            <div key={i} className="h-64 cursor-pointer w-44 rounded-lg">
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <img
                  src={e.img}
                  className="h-full w-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

                {/* Add the text overlay here */}
                <p className="absolute bottom-4 left-4 text-xl text-white z-20">
                  {e.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
