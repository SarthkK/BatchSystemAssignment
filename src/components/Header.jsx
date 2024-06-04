import React from "react";

function Header({ className }) {
  return (
    <div className={`flex w-[1090px] justify-between ${className}`}>
      <div className="flex gap-[40px] items-center">
        <div className=" flex gap-[2px]">
          <img src="./logo.svg" />
          <p className=" font-Jakarta font-extrabold text-[4.15px] text-black self-center mb-[9px]">
            TM
          </p>
        </div>
        <div className="flex gap-[24px] items-center">
          <p className=" font-ClashBold text-[20px] leading-[26px] text-[#FF5555]">
            Home
          </p>
          <p className=" font-ClashMedium text-[20px] leading-[26px] text-black">
            About Us
          </p>
          <p className=" font-ClashMedium text-[20px] leading-[26px] text-black">
            Pricing
          </p>
          <p className=" font-ClashMedium text-[20px] leading-[26px] text-black">
            Features
          </p>
        </div>
      </div>
      <div className="w-[180px] h-[60px] bg-black rounded-[4px] flex items-center justify-center">
        <p className=" font-ClashMedium text-[18px] leading-[28px] text-white">
          Download
        </p>
      </div>
    </div>
  );
}

export default Header;
