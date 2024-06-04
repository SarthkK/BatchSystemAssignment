import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="py-[40px] flex flex-col items-center max-w-screen">
      <Header />
      <div className="absolute left-[34px] top-[4950px]">
        <div className="bg-[#FF5555] w-[284px] h-[153px] blur-[40px] rounded-full absolute z-[-1] left-[33px]"></div>
        <div className="bg-[#FDE598] w-[290px] h-[153px] blur-[40px] top-[57px] left-0 rounded-full absolute -z-40"></div>
      </div>
      {/* Iphone group */}
      <div className="absolute left-[700px] top-[60px] overflow-x-hiden">
        <img src="iPhone13Top.png" className="absolute z-10" />
        <img
          src="iPhone13Middle.png"
          className="absolute left-[122px] top-[77px] z-[9]"
        />
        <img
          src="iPhone13Top.png"
          className="absolute left-[240px] top-[145px] z-[8]"
        />
        <img src="Circles.png" className=" relative left-[65px] top-[10px]" />
        <div className=" w-[397px] h-[214px] bg-[#FF5555] rounded-full blur-[60px] absolute rotate-[150deg] bottom-[15px] left-[220px]"></div>
        <img
          src="Stars.svg"
          width={48}
          className="rotate-[150deg] absolute bottom-[50px] left-[185px]"
        />
      </div>
      {/* Landing 1 Text */}
      <div className="relative flex w-[1090px]">
        <img src="Stars.svg" className="absolute top-[-50px] right-[-150px]" />
        <img
          src="Stars.svg"
          width={48}
          className="absolute rotate-[-45deg] top-[20px] left-[-120px]"
        />
        <div className="absolute left-[150px] top-[50px]">
          <div className="bg-[#FF5555] w-[284px] h-[153px] blur-[40px] rounded-full absolute z-[-1] left-[33px]"></div>
          <div className="bg-[#FDE598] w-[290px] h-[153px] blur-[40px] top-[57px] left-0 rounded-full absolute -z-40"></div>
        </div>
        <div className="flex flex-col gap-[24px] mt-[115px]">
          <p className=" font-ClashBold text-[64px] leading-[64px] text-black w-[618px]">
            Make The Best Financial Decisions
          </p>
          <p className=" font-ClashMedium text-[18px] leading-[28px] w-[638px] text-black/40">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className=" flex gap-[40px] items-center">
            <div className=" rounded-[4px] w-[180px] h-[60px] bg-black flex items-center justify-center gap-[8px]">
              <p className=" font-ClashMedium text-[18px] leading-[28px] text-white">
                Get Started
              </p>
              <img src="./ArrowRight.svg" />
            </div>
            <div className="bg-transparent flex gap-[14px] items-center">
              <img src="./PlayButton.svg" />
              <p className=" font-medium text-[18px] leading-[28px]">
                Watch Video
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="Stars.svg"
              width={48}
              className="absolute rotate-[-45deg] left-[135px] top-[70px]"
            />
            <img src="./TickerTape.png" className="relative left-[-30px]" />
          </div>
        </div>
      </div>
      {/* Landing 2 */}
      <div className="mt-[62px] grid grid-cols-2 w-[1322px] mr-[20px]">
        <div className="relative flex justify-center items-center top-[55px] left-[60px]">
          <div className="absolute right-[-530px] top-[120px]">
            <div className="bg-[#FF5555] w-[284px] h-[153px] blur-[40px] rounded-full absolute z-[-1] left-[33px]"></div>
            <div className="bg-[#FDE598] w-[290px] h-[153px] blur-[40px] top-[57px] left-0 rounded-full absolute -z-40"></div>
          </div>
          <img
            src="Stars.svg"
            className=" absolute w-[48px] rotate-[-45deg] top-[60px] left-[-60px]"
          />
          <div className="absolute z-[-1] right-[250px] top-[50px]">
            <div className="w-[360px] h-[190px] bg-[#FDE598] blur-[40px] rounded-full z-[1]"></div>
            <div className="w-[352px] h-[190px] bg-[#FF5555] blur-[40px] rounded-full absolute top-[96px] z-[2]"></div>
          </div>
          <img src="./iPhone13Landing2.png" className="" />
          <img
            src="./Circles.png"
            className="absolute top-[-57px] right-[86px] z-[-1]"
          />
        </div>
        <div className="flex flex-col gap-[32px] self-center">
          <div className="flex flex-col gap-[4px]">
            <p className=" font-ClashMedium text-[18px] leading-[28px] tracking-[16%] text-[#FF5555]">
              FEATURES
            </p>
            <p className=" font-ClashBold text-[48px] leading-[48px] text-black">
              Uifry Premium
            </p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[8px] items-center">
              <img src="starLanding2.png" />
              <p className=" font-ClashSemibold text-[18px] leading-[28px]">
                budgeting intervals
              </p>
            </div>
            <p className=" font-ClashMedium text-[18px] leading-[28px] text-black/50">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[8px] items-center">
              <img src="cubeLanding2.png" />
              <p className=" font-ClashSemibold text-[18px] leading-[28px]">
                budgeting intervals
              </p>
            </div>
            <p className=" font-ClashMedium text-[18px] leading-[28px] text-black/50">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[8px] items-center">
              <img src="cube2Landing2.png" />
              <p className=" font-ClashSemibold text-[18px] leading-[28px]">
                budgeting intervals
              </p>
            </div>
            <p className=" font-ClashMedium text-[18px] leading-[28px] text-black/50">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
      {/* Landing 3 */}
      <div className="mt-[62px] grid grid-cols-2 w-[1322px]">
        <div className="flex flex-col gap-[32px] self-center w-[535px] justify-self-center">
          <div className="flex flex-col gap-[4px]">
            <p className=" font-ClashMedium text-[18px] leading-[28px] tracking-[16%] text-[#FF5555]">
              ADVANTAGES
            </p>
            <p className=" font-ClashBold text-[48px] leading-[48px] text-black">
              why choose Uifry?
            </p>
          </div>
          <div className=" flex flex-col gap-[23px]">
            <div className="flex gap-[15px] items-center">
              <img src="notificationLanding3.svg" width={48} />
              <p className=" font-ClashSemibold text-[28px] leading-[28px]">
                clever notifications
              </p>
            </div>
            <p className=" font-ClashMedium text-[18px] leading-[28px] text-black/50">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center top-[55px] left-[60px]">
          <div className="absolute z-[-1] right-[620px] top-[250px]">
            <div className="w-[352px] h-[190px] bg-[#FF5555] blur-[40px] rounded-full absolute  z-[2]"></div>
            <div className="w-[360px] h-[190px] bg-[#FDE598] blur-[40px] rounded-full absolute top-[80px] z-[1]"></div>
          </div>
          <img src="Stars.svg" className="absolute top-0 right-0" />
          <img src="./iPhone13Landing3.png" className="" />
          <img
            src="./onholdLanding2.png"
            className="absolute top-[250px] left-[230px]"
          />
          <img
            src="./Circles.png"
            className="absolute top-[-57px] right-[86px] z-[-1]"
          />
        </div>
      </div>
      {/* Landing 4 */}
      <div className="mt-[62px] grid grid-cols-2 w-[1322px] ml-[]">
        <div className="relative flex justify-center items-center top-[55px] left-[60px]">
          <div className="absolute z-[-1] right-[530px] top-[200px]">
            <div className="w-[352px] h-[190px] bg-[#FDE598] blur-[40px] rounded-full absolute rotate-[40deg] z-[1]"></div>
            <div className="w-[360px] h-[190px] bg-[#FF5555] blur-[40px] rounded-full absolute top-[100px] z-[2] rotate-[40deg]"></div>
          </div>
          <img
            src="Stars.svg"
            width={48}
            className="absolute top-[-80px] right-[100px] rotate-[45deg]"
          />
          <img src="./iPhone13Landing2.png" className="" />
          <img
            src="./cardLanding4.svg"
            className="absolute top-[168px] left-[185px]"
          />
          <img
            src="./Circles.png"
            className="absolute top-[-57px] right-[86px] z-[-1]"
          />
        </div>
        <div className="relative flex flex-col gap-[32px] self-center w-[535px]">
          <div className=" flex flex-col gap-[23px]">
            <div className="flex gap-[15px] items-center">
              <img src="startLanding4.svg" width={48} />
              <p className=" font-ClashSemibold text-[28px] leading-[28px]">
                fully customizable
              </p>
            </div>
            <p className=" font-ClashMedium text-[18px] leading-[28px] text-black/50">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
          <img
            src="./Stars.svg"
            width={64}
            className="absolute top-[450px] left-[410px]"
          />
        </div>
      </div>
      {/* Landing 5 */}
      <div className="flex flex-col items-center mt-[62px] w-[1185px]">
        <div className="flex flex-col gap-[4px] items-center">
          <p className=" font-ClashMedium text-[18px] leading-[28px] tracking-[18%]">
            TESTIMONIAL
          </p>
          <p className=" font-ClashSemibold text-[48px] leading-[48px] w-[455px] text-center">
            What Our Users Say About Us?
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center relative">
            <img src="./groupLanding5.png" className="relative top-[80px]" />
            <img
              src="./Circles.png"
              className="absolute left-[-78px] top-[-5px] z-[-1]"
            />
            <div className="absolute z-[-10] left-[25px] bottom-[320px]">
              <div className=" w-[293px] h-[158px] bg-[#FF5555] rounded-full blur-[50px] z-[2] absolute left-[34px]"></div>
              <div className=" w-[299px] h-[158px] bg-[#FDE598] rounded-full blur-[50px] z-[1] absolute top-[79px]"></div>
            </div>
            <img
              src="./Stars.svg"
              width={48}
              className="absolute rotate-[-45deg] bottom-[-50px] left-[-70px]"
            />
          </div>
          <div className="flex flex-col gap-[24px] self-center">
            <p className=" font-ClashSemibold text-[28px] leading-[28px] w-[442px]">
              The Best Financial Accounting App Ever
            </p>
            <p className=" font-medium text-[18px] leading-[28px] text-black/50">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <img src="./profileLanding5.png" width={192} />
            <p className=" font-ClashSemibold text-[18px] leading-[28px] ">
              Nick Jonas
            </p>
          </div>
        </div>
      </div>
      {/* Landing 6 */}
      <div className="flex flex-col gap-[40px] mt-[68px] relative">
        <img
          src="Stars.svg"
          width={64}
          className="absolute left-[620px] top-[60px]"
        />
        <div className="flex flex-col gap-[4px]">
          <p className=" font-ClashMedium text-[18px] leading-[28px] text-[#FF5555] tracking-[16%]">
            FAQ
          </p>
          <p className="w-[497px] font-ClashBold text-[48px] leading-[48px]">
            Frequently Asked Questions
          </p>
        </div>

        <div className=" grid grid-cols-2 grid-rows-3 gap-[20px] w-[1090px]">
          <div className="p-[31px] rounded-[8px] flex items-center justify-center bg-[#FF5555]">
            <div className="flex flex-col gap-[8px] w-[474px]">
              <p className=" font-ClashSemibold text-[28px] leading-[28px] text-white">
                The Best Financial Accounting App Ever
              </p>
              <p className=" font-ClashMedium text-[18px] leading-[28px] text-white">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="p-[31px] rounded-[8px] flex items-center justify-center bg-white">
            <div className="flex flex-col gap-[8px] w-[474px]">
              <p className=" font-ClashSemibold text-[28px] leading-[28px] text-black">
                The Best Financial Accounting App Ever
              </p>
              <p className=" font-ClashMedium text-[18px] leading-[28px] text-black">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="p-[31px] rounded-[8px] flex items-center justify-center bg-white">
            <div className="flex flex-col gap-[8px] w-[474px]">
              <p className=" font-ClashSemibold text-[28px] leading-[28px] text-black">
                The Best Financial Accounting App Ever
              </p>
              <p className=" font-ClashMedium text-[18px] leading-[28px] text-black">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="p-[31px] rounded-[8px] flex items-center justify-center bg-[#FF5555]">
            <div className="flex flex-col gap-[8px] w-[474px]">
              <p className=" font-ClashSemibold text-[28px] leading-[28px] text-white">
                The Best Financial Accounting App Ever
              </p>
              <p className=" font-ClashMedium text-[18px] leading-[28px] text-white">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="p-[31px] rounded-[8px] flex items-center justify-center bg-[#FF5555]">
            <div className="flex flex-col gap-[8px] w-[474px]">
              <p className=" font-ClashSemibold text-[28px] leading-[28px] text-white">
                The Best Financial Accounting App Ever
              </p>
              <p className=" font-ClashMedium text-[18px] leading-[28px] text-white">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="p-[31px] rounded-[8px] flex items-center justify-center bg-white">
            <div className="flex flex-col gap-[8px] w-[474px]">
              <p className=" font-ClashSemibold text-[28px] leading-[28px] text-black">
                The Best Financial Accounting App Ever
              </p>
              <p className=" font-ClashMedium text-[18px] leading-[28px] text-black">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Landing 7 */}
      <div className="mt-[156px] w-[1090px] h-[508px] bg-black rounded-[8px] flex items-center relative z-[1]">
        <div className="flex flex-col gap-[16px] w-[547px] ml-[77px]">
          <p className=" font-ClashBold text-[48px] leading-[48px] text-white">
            Ready To Get Started?
          </p>
          <p className="text-[18px] leading-[28px] text-white font-Clash">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <div className="w-[208px] h-[60px] rounded-[4px] bg-white flex items-center justify-center">
            <div className="flex gap-[12px] items-center">
              <p className=" font-medium text-[18px] leading-[28px] text-black">
                Download App
              </p>
              <img src="./AppleLogo.svg" />
            </div>
          </div>
        </div>
        <img src="CircleWhite1.png" className="absolute bottom-0" />
        <img src="CircleWhite2.png" className="absolute right-0 top-0" />
        <img
          src="StarWhite.svg"
          className="absolute top-[20px] right-[350px]"
        />
        <img
          src="StarWhite.svg"
          width={48}
          className="absolute rotate-[-45deg] top-[338px] left-[445px]"
        />
        <img src="iPhone13Landing6.png" className="absolute right-0 z-[1]" />
        <div className="absolute z-[0] right-[325px] top-[165px]">
          <div className="w-[275px] h-[148px] rotate-[40deg] rounded-full bg-[#FDE598] blur-[50px] absolute"></div>
          <div className="w-[275px] h-[148px] rotate-[40deg] rounded-full bg-[#FF5555] blur-[50px] absolute top-[77px]"></div>
        </div>
        <img
          src="./Stars.svg"
          className="absolute top-[-70px] right-[-120px]"
        />
        <img
          src="./Stars.svg"
          width={48}
          className="absolute left-[-150px] rotate-[-45deg] top-[140px]"
        />
      </div>
      {/* Landing 8 */}
      <Footer className="mt-[155px]" />
    </div>
  );
}

export default App;
