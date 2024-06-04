import React from "react";

function Footer({ className }) {
  return (
    <div className={`flex flex-col gap-[92px] items-center ${className}`}>
      <div className="flex gap-[65px]">
        <div className="flex flex-col gap-[16px]">
          <div className=" flex gap-[2px]">
            <img src="./logo.svg" />
            <p className=" font-Jakarta font-extrabold text-[4.15px] text-black self-center mb-[9px]">
              TM
            </p>
          </div>
          <div className="flex gap-[8px] items-center">
            <img src="./mailIcon.svg" />
            <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
              Help@Frybix.com
            </p>
          </div>
          <div className="flex gap-[8px] items-center">
            <img src="./callIcon.svg" />
            <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
              +1 234 456 678 89
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className=" font-ClashMedium text-[32px] leading-[42px] text-black ">
            Links
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            Home
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            About Us
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            Bookings
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            Blog
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className=" font-ClashMedium text-[32px] leading-[42px] text-black ">
            Legal
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            Terms of Use
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            Privacy Policy
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            Cookie Policy
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className=" font-ClashMedium text-[32px] leading-[42px] text-black ">
            Product
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            Take Tour
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            Live Chat
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            Reviews
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className=" font-ClashMedium text-[32px] leading-[42px] text-black ">
            Newsletter
          </p>
          <p className=" font-ClashMedium text-[16px] leading-[26px] text-black">
            Stay Up to Date
          </p>
          <div className="flex">
            <div className="w-[160px] h-[61px] bg-white rounded-[4px] flex justify-center">
              <input
                type="text"
                placeholder="Your Email"
                className=" placeholder:text-[#81848A] font-ClashMedium text-[16px] leading-[26px] focus:outline-none w-[120px]"
              />
            </div>
            <div className="w-[160px] h-[61px] bg-black rounded-[4px] flex items-center justify-center">
              <p className=" font-ClashMedium text-[16px] leading-[26px] text-white">
                Subscribe
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1090px]">
        <div className="radial"></div>
        <div className="w-full h-[104px] flex items-center justify-center">
          <p className=" font-medium text-[16px] leading-[26px]">
            Copyright 2022 uifry.com all rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
