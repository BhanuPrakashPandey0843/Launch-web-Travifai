import React from "react";
import image2 from "/src/assets/travel2.png"; // Foreground Image
import image from "/src/assets/travel.png"; // Background Image

const ComingSoon = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 p-6 relative">
      {/* Left Side: Text & Input */}
      <div className="md:w-3/2 pl-10">
        <h1 className="text-left text-8xl mt-10 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 drop-shadow-lg shadow-blue-600">
          COMING <br /> SOON!
        </h1>
        <p className="mt-4 text-xl text-gray-600">We are currently working hard on this page!</p>

        <div className="mt-6 flex gap-2">
          <input
            type="email"
            placeholder="Enter email"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            NOTIFY ME
          </button>
        </div>
      </div>

      {/* Image Wrapper (for layering) */}
      <div className="md:w-1/2 flex justify-center relative mt-10">
        {/* Background Image */}
        <img 
          src={image}
          alt="Background Rocket" 
          className="absolute top-[-180px] left-0 w-full max-w-4xl h-auto  z-0"
        />
        {/* Foreground Image */}
        <img 
          src={image2}
          alt="Rocket Launch" 
          className="relative w-full max-w-3xl md:max-w-4xl lg:max-w-5xl h-auto z-10 translate-x-30"
        />
      </div>
    </div>
  );
};

export default ComingSoon;
