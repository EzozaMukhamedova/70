import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { LuTicketPercent } from "react-icons/lu";
import { HiOutlineX } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgShoppingBag } from "react-icons/cg";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";
import paymentMethodsImage from "./assets/images/Payment Methods.png";
import americanImage from "./assets/images/amerikan.png";
import roundImage from "./assets/images/dumaloq.png";
import stripeImage from "./assets/images/stripe.png";
import payImage from "./assets/images/pay.png";
import paypalImage from "./assets/images/paypal.png";
import image1 from "./assets/images/instagram1.png";
import image2 from "./assets/images/instagram2.png";
import image3 from "./assets/images/instagram3.png";
import image4 from "./assets/images/istagram4'.png";
import image5 from "./assets/images/istagrma5.png";
import image6 from "./assets/images/instagrm6.png";
import { MdEmail } from "react-icons/md";

import shoes1 from "./assets/images/shoes1.png";
import shoes2 from "./assets/images/shoes2.png";
import shoes3 from "./assets/images/shoes4.png";

const App = () => {
  return (
    <div>
      <header>
        <nav className="supnav bg-[#38CB89] lg:relative">
          <div className="container mx-auto lg:w-[1184px]">
            <div className="supnav__wrapper flex items-center justify-center py-[8px] ">
              <div className="supnav__info flex items-center pr-[22px] lg:text-center">
                <LuTicketPercent className="mr-[10px]" />
                <p className="">30% off storewide — Limited time! </p>
                <p className="lg:flex items-center hidden pl-[12px]">
                  Shop Now
                  <span>
                    <GoArrowRight />
                  </span>
                </p>
              </div>
              <HiOutlineX className="lg:absolute lg:top-5px lg:right-[16px] " />
            </div>
          </div>
        </nav>
        <nav className="nav container flex items-center justify-between w-[375px] py-[18px]  lg:w-[1184px]">
          <div className="flex items-center gap-[5px]">
            <div className="lg:hidden">
              <RxHamburgerMenu />
            </div>
            <h3 className="font-bold text-[24px] leading-[24px]">3legant.</h3>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-[40px]">
              <li className="">
                <a href="" className="">
                  Home
                </a>
              </li>
              <li className="">
                <a href="" className="flex items-center">
                  Shop <GoChevronDown />
                </a>
              </li>
              <li className="">
                <a href="" className="flex items-center">
                  Product <GoChevronDown />
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="text-[22px] flex items-center gap-[15px]">
              <RiSearchLine className="hidden lg:block" />
              <CgProfile className="hidden lg:block" />
              <CgShoppingBag />
            </div>
            <div className="text-white bg-black size-[20px] text-center rounded-[20px] font-[700] text-[14px]">
              <span>2</span>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero lg:max-w-[1440px] mx-auto max-w-[571px] ">
          <div className="lg:relative ">
            <div className="hidden w-full mx-auto hero lg:block">
              <img src="./src/assets/images/hero lg.png" alt="" />
            </div>
            <div className="text-center pb-[40px] pt-[360px] lg:absolute lg:top-[-196px] lg:left-[172px] ">
              <h1 className="text-white text-[44px] leading-[44px] lg:text-[72px] lg:leading-[80px] lg:text-left">
                More than <br /> just a game. <br /> It’s a lifestyle.
              </h1>
              <p className="text-white w-[300px] mx-auto my-[16px] leading-[26px] lg:text-left lg:mx-0">
                Whether you’re just starting out, have played your whole life or
                you're a Tour pro, your swing is like a fingerprint.
              </p>
              <div className="lg:text-left">
                <button className="bg-[#38CB89] py-[12px] px-[56px] rounded-[8px]">
                  Shopping Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center mx-auto">
            <h1 className="text-[34px] leading-[38px] text-center lg:pt-[80px] lg:pb-[48px] pt-[40px] pb-[24px]">
              Shop by <br className="lg:hidden" />
              Categories
            </h1>
            <div className="grid grid-cols-2 gap-[8px] lg:grid-cols-3 lg:gap-[24px]">
              <div className="mb-[16px]">
                <div className="">
                  <img
                    className="lg:w-[357px] lg:h-[309px]"
                    src="./src/assets/images/img.png"
                    alt=""
                  />
                </div>
                <p className="text-center mt-[24px] font-bold text-[20px] leading-[28px]">
                  Golf Clubs
                </p>
              </div>
              <div className="mb-[16px]">
                <div className="">
                  <img
                    className="lg:w-[357px] lg:h-[309px]"
                    src="./src/assets/images/img (1).png"
                    alt=""
                  />
                </div>
                <p className="text-center mt-[24px] font-bold text-[20px] leading-[28px]">
                  Golf Balls
                </p>
              </div>
              <div className="mb-[16px]">
                <div className="">
                  <img
                    className="lg:w-[357px] lg:h-[309px]"
                    src="./src/assets/images/img (2).png"
                    alt=""
                  />
                </div>
                <p className="text-center mt-[24px] font-bold text-[20px] leading-[28px]">
                  Golf Bags
                </p>
              </div>
              <div className="mb-[16px]">
                <div className="">
                  <img
                    className="lg:w-[357px] lg:h-[309px]"
                    src="./src/assets/images/img (3).png"
                    alt=""
                  />
                </div>
                <p className="text-center mt-[24px] font-bold text-[20px] leading-[28px]">
                  Clothing & <br className="lg:hidden" /> Rainwear
                </p>
              </div>
              <div className="mb-[16px]">
                <div className="">
                  <img
                    className="lg:w-[357px] lg:h-[309px]"
                    src="./src/assets/images/img (4).png"
                    alt=""
                  />
                </div>
                <p className="text-center mt-[24px] font-bold text-[20px] leading-[28px]">
                  Footwear
                </p>
              </div>
              <div className="mb-[16px]">
                <div className="">
                  <img
                    className="lg:w-[357px] lg:h-[309px]"
                    src="./src/assets/images/img (5).png"
                    alt=""
                  />
                </div>
                <p className="text-center mt-[24px] font-bold text-[20px] leading-[28px]">
                  Accessories
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#141718] ">
          <div className="lg:flex lg:max-w-[1440px] mx-auto">
            <div className="hidden lg:block">
              <img src="./src/assets/images/lg img.png" alt="" />
            </div>
            <div className=" py-[28.5px] px-[32px] w-[375px] mx-auto lg:w-[475px] lg:pt-[101px] lg:pl-[72px]">
              <div className="">
                <p className="text-[#38CB89] font-[700] text-[16px] leading-[16px] ">
                  LIMITED EDITION
                </p>
                <h3 className="text-white font-bold text-[34px] leading-[38px] py-[16px] lg:text-[40px] lg:leading-[44px]">
                  Hurry up! 30% OFF
                </h3>
                <p className="text-white font-[400] text-[14px] leading-[22px] lg:text-[20px] lg:leading-[32px]">
                  Find clubs that are right for your game
                </p>
              </div>
              <div className="mt-[24px] ">
                <p className="text-white font-[400] text-[16px] leading-[26px]">
                  Offer expires in:
                </p>
                <div className="grid grid-cols-4 w-[288px] mt-[12px] pb-[20px] ">
                  <div className="w-[60px] font-bold text-[34px] leading-[38px] py-[11px] px-[10px] bg-white">
                    <span>02</span>
                  </div>
                  <div className="w-[60px] font-bold text-[34px] leading-[38px] py-[11px] px-[10px] bg-white">
                    <span>12</span>
                  </div>
                  <div className="w-[60px] font-bold text-[34px] leading-[38px] py-[11px] px-[10px] bg-white">
                    <span>45</span>
                  </div>
                  <div className="w-[60px] font-bold text-[34px] leading-[38px] py-[11px] px-[10px] bg-white">
                    <span>05</span>
                  </div>
                </div>
                <div className="">
                  <button className="bg-[#38CB89] py-[6px] px-[40px] rounded-[8px]">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[375px] mx-auto lg:hidden ">
              <img src="./src/assets/images/paste image.png" alt="" />
            </div>
          </div>
        </section>
        <section className="">
          <div className="lg:w-[1120px] mx-auto">
            <div className="lg:py-[48px] pt-[40px] pb-[16px]">
              <h1 className="font-bold text-[34px] leading-[38px] text-center lg:text-[44px] lg:leading-[44px] lg:text-left">
                Shop Collection
              </h1>
            </div>

            <div className="w-[375px] mx-auto flex flex-col items-center gap-[16px] relative lg:w-[1120px] lg:flex-row">
              <div className="">
                <div className="">
                  <img
                    className="lg:w-[548px] lg:-[664px]"
                    src="./src/assets/images/image 1.png"
                    alt=""
                  />
                </div>
                <div className="absolute top-[280px] left-[65px] lg:top-[530px]">
                  <h3 className="font-bold text-[28px] leading-[34px] pb-[8px] lg:text-[34px] lg:leading-[38px]">
                    Juniors Set
                  </h3>
                  <p className="flex items-center border-b w-[89px]">
                    Collection <GoArrowRight />
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-col lg:gap-[16px] flex flex-col gap-[16px]">
                <div className="">
                  <div className="">
                    <img
                      className="lg:w-[548px] lg:-[319px]"
                      src="./src/assets/images/image 2.png"
                      alt=""
                    />
                  </div>
                  <div className="absolute top-[475px] left-[65px] lg:top-[210px] lg:left-[630px]">
                    <h3 className="font-bold text-[28px] leading-[34px] pb-[8px] lg:text-[34px] lg:leading-[38px]">
                      Men’s Set
                    </h3>
                    <p className="flex items-center border-b w-[89px]">
                      Collection <GoArrowRight />
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      className="lg:w-[548px] lg:-[319px]"
                      src="./src/assets/images/image.png"
                      alt=""
                    />
                  </div>
                  <div className="absolute top-[680px] left-[65px] lg:top-[530px] lg:left-[630px]">
                    <h3 className="font-bold text-[28px] leading-[34px] pb-[8px] lg:text-[34px] lg:leading-[38px]">
                      Women’s Set
                    </h3>
                    <p className="flex items-center border-b w-[89px]">
                      Collection <GoArrowRight />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container px-5 mx-auto lg:w-[1120px] w-[375px]">
            <div className="p-5 bg-white">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-3xl font-bold">Latest Articles</h2>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View More →
                </a>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="mb-4">
                  <img
                    src={shoes1}
                    alt="Air Jordan x Travis Scott Event"
                    className="w-full h-auto mb-2"
                  />
                  <p className="text-lg font-semibold">
                    Air Jordan x Travis Scott Event
                  </p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Read More →
                  </a>
                </div>
                <div className="mb-4">
                  <img
                    src={shoes2}
                    alt="The timeless classics on the green"
                    className="w-full h-auto mb-2"
                  />
                  <p className="text-lg font-semibold">
                    The timeless classics on the green
                  </p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Read More →
                  </a>
                </div>
                <div className="mb-4">
                  <img
                    src={shoes3}
                    alt="The 2023 Ryder Cup"
                    className="w-full h-auto mb-2"
                  />
                  <p className="text-lg font-semibold">The 2023 Ryder Cup</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QORA */}
        <section className="flex justify-center items-center h-[360px] bg-[#141718]">
          <div className="relative w-full max-w-[375px] lg:max-w-[1440px] h-full">
            <img
              className="absolute top-0 left-0 object-cover w-full h-full"
              src="./src/assets/images/bg-img.png"
              alt="Background Image"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
              <h2 className="text-[28px] font-semibold text-white text-center mb-3">
                Join Our Newsletter
              </h2>
              <p className="text-[14px] text-center mb-4 text-gray-400">
                Sign up for deals, new products and promotions
              </p>
              <form className="w-full max-w-[540px]">
                <div className="flex items-center border-b border-gray-500">
                  <label
                    htmlFor="email"
                    className="flex items-center flex-grow"
                  >
                    <MdEmail className="mr-2 text-gray-400" size={24} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      className="flex-grow px-4 py-2 text-white bg-transparent outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white rounded-r-lg"
                  >
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* INSRAGTAM */}
        <section>
          <div className="flex flex-col items-center mx-auto w-[375px] lg:w-[1440px]">
            <div className="bg-white ">
              <h2 className="mb-2 text-[16px] font-bold text-center mt-[40px] text-[#6C7275]">
                NEWSFEED
              </h2>
              <h2 className="mb-2 text-[34px] font-bold text-center">
                Instagram
              </h2>
              <p className="mb-4 text-sm text-center">
                Follow us on social media for more discount &{" "}
                <br className="lg:hidden" /> promotions
              </p>
              <div className="mb-[40px] text-center text-gray-500 text-[24px]">
                @3legant_official
              </div>
              <div className="grid grid-cols-2 lg:flex lg:mx-auto lg:justify-center lg:w-[1440px] ">
                <img
                  src={image1}
                  alt="Instagram 1"
                  className="w-full h-auto "
                />
                <img
                  src={image2}
                  alt="Instagram 2"
                  className="w-full h-auto "
                />
                <img
                  src={image3}
                  alt="Instagram 3"
                  className="w-full h-auto "
                />
                <img
                  src={image4}
                  alt="Instagram 4"
                  className="w-full h-auto "
                />
                <img
                  src={image5}
                  alt="Instagram 5"
                  className="w-full h-auto "
                />
                <img
                  src={image6}
                  alt="Instagram 6"
                  className="w-full h-auto "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}

        <section className="text-white bg-black">
          <footer className="max-w-screen-xl px-4 py-8 mx-auto lg:px-8 lg:w-[1120px] w-[375px]">
            <div className="flex flex-col items-start justify-between space-y-8 lg:flex-row lg:space-y-0">
              <div className="lg:w-1/4">
                <h2 className="mb-4 text-2xl font-bold">3legant.</h2>
                <p className="pb-[32px]">
                  More than just a game.
                  <br className="" />
                  It's a lifestyle.
                </p>
                <div className="flex mb-4 space-x-4">
                  <FaInstagram />
                  <FaFacebookF />
                  <FaYoutube />
                </div>
              </div>
              <div className="flex-grow lg:flex lg:justify-between">
                <div className="mb-[32px]  ">
                  <h3 className="mb-2 font-semibold text-[18px] pb-[24px] ">
                    <div className="lg:hidden border-t border-gray-500 mb-[32px] w-[375px]"></div>
                    Page
                  </h3>
                  <ul className="space-y-1">
                    <li className="pb-[24px]">
                      <a href="#" className="hover:text-gray-300">
                        Home
                      </a>
                    </li>
                    <li className="pb-[24px]">
                      <a href="#" className="hover:text-gray-300">
                        Shop
                      </a>
                    </li>
                    <li className="pb-[24px]">
                      <a href="#" className="hover:text-gray-300">
                        Product
                      </a>
                    </li>
                    <li className="pb-[24px]">
                      <a href="#" className="hover:text-gray-300">
                        Artisans
                      </a>
                    </li>
                    <li className="pb-[24px]">
                      <a href="#" className="hover:text-gray-300 ">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mb-[32px]">
                  <h3 className="mb-2 font-semibold text-[18px] pb-[24px]">
                    <div className="lg:hidden border-t border-gray-500 mb-[32px]"></div>
                    Info
                  </h3>
                  <ul className="space-y-1 ">
                    <li className="pb-[24px]">
                      <a href="#" className="hover:text-gray-300 ">
                        Shipping Policy
                      </a>
                    </li>
                    <li className="pb-[24px]">
                      <a href="#" className="hover:text-gray-300">
                        Return & Refund
                      </a>
                    </li>
                    <li className="pb-[24px]">
                      <a href="#" className="hover:text-gray-300">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-300">
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-[18px] pb-[24px]">
                    <div className="lg:hidden border-t border-gray-500 mb-[32px]"></div>
                    Office
                  </h3>
                  <p>
                    <p className="pb-[24px]">43111 Hai Trieu street,</p>
                    <p className="pb-[24px]">District 1, HCMC</p>
                    <p className="pb-[24px]"> Vietnam</p>
                    <p className="pb-[24px]"> +84-76-3227</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-8 border-t border-gray-500 lg:flex lg:justify-between ">
              <div className="mt-4 text-sm text-center lg:text-right ">
                Copyright © 2023 3legant. All rights reserved.
              </div>
              <div className="mt-2 text-xs text-center text-gray-400 lg:text-right pb-[24px]">
                Privacy Policy | Terms of Use
              </div>
              <div className="flex justify-center space-x-2">
                <img
                  src={paymentMethodsImage}
                  alt="Payment Methods"
                  className="h-8"
                />
                <img
                  src={americanImage}
                  alt="American Express"
                  className="h-8"
                />
                <img
                  src={roundImage}
                  alt="Round Payment Method"
                  className="h-8"
                />
                <img src={stripeImage} alt="Stripe Payment" className="h-8" />
                <img src={payImage} alt="Pay Payment" className="h-8" />
                <img src={paypalImage} alt="PayPal Payment" className="h-8" />
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default App;
