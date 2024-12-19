import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[400px] md:h-[600px] bg-hero-banner bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto relative flex flex-col justify-center items-center h-full">
        {/* Black Box Behind Text */}
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
          <h1 className="text-[40px] md:text-[70px] leading-[1.1] font-bold mb-4 uppercase text-white">
            Saksit Chuenmaiwaiy
          </h1>
          <span className="font-semibold text-[15px] text-white">6402385</span>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              to="https://www.facebook.com/profile.php"
              target="_blank"
              className="uppercase font-bold border-b-2 border-white text-white hover:text-gray-300 hover:border-gray-300"
            >
              Facebook
            </Link>
            <Link
              to="https://github.com/hellOoSaksit?tab=repositories"
              target="_blank"
              className="uppercase font-bold border-b-2 border-white text-white hover:text-gray-300 hover:border-gray-300"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
