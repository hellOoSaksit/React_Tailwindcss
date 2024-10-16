import React from "react";
import Banner from "../img/banner.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="h-[600px] w-full bg-hero-banner bg-no-repeat bg-cover bg-center py-5">
      <div className="container mx-auto flex justify-around h-full">
        {/* Text */}
        <div className="flex flex-col justify-center ml-60">
          {" "}
          {/* เพิ่ม margin-right */}
          <div>
            <div className="font-semibold flex items-center uppercase">
              Project Midterm
            </div>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 uppercase">
            Saksit Chuenmaiwaiy
          </h1>
          <span className="font-semibold text-[15px]">6402385</span>
          <div className="flex space-x-4">
            {" "}
            {/* ใช้ space-x-4 เพื่อเพิ่มระยะห่าง */}
            <Link
              to="https://www.facebook.com/profile.php?id=100010512674475"
              target="_blank"
              className="self-start uppercase font-semibold border-b-2 border-black"
            >
              FaceBook
            </Link>
            <Link
              to="https://github.com/hellOoSaksit?tab=repositories"
              target="_blank"
              className="self-start uppercase font-semibold border-b-2 border-black"
            >
              GithHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
