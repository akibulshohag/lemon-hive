import React from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineLogin,
  AiOutlineHome
} from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="relative">
      <div className="bg-white border-b-[1px] dark:bg-black">
        <div className="mx-auto max-w-7xl px-2 ">
          <div className="flex items-center justify-between py-5 md:justify-start md:space-x-10">
            <div className="flex justify-center lg:w-auto lg:flex-1">
              <a href="#">
                {/* <img
                  className="w-auto sm:h-12"
                  src="/TexSuppliers (JPEG-01).png"
                  alt="logo"
                /> */}
                <p>Auto Care</p>
              </a>
            </div>

            <div className="flex items-center">
              <input
                placeholder="What are you looking for..."
                className="border-2 rounded-l-full h-10 lg:w-[650px] border-orange-500 px-3"
                type="text"
              />
              <div className="flex items-center bg-orange-500 rounded-r-full  px-4 cursor-pointer">
                <AiOutlineSearch color="#fff" size={25} />
                <button className="p-2  text-white font-medium"> Search</button>
              </div>
            </div>


            <div className="flex items-center justify-between  md:justify-start  md:space-x-5">
              <div className="cursor-pointer">
                <div className="flex justify-center">
                  <AiOutlineUser size={25} />
                </div>
                <span className="text-[12px]">Become a Vendor</span>
              </div>
              <div className="cursor-pointer">
                <div className="flex justify-center">
                  <AiOutlineMessage size={25} />
                </div>
                <span className="text-[12px]">Message</span>
              </div>
              <div className="cursor-pointer">
                <div className="flex justify-center">
                  <AiOutlineLogin size={25} />
                </div>
                <span className="text-[12px]">SignIn</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-white pl-10 dark:bg-black border-b-[1px]">
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex items-center  py-2 md:justify-start md:space-x-10">
              <div className="flex items-center cursor-pointer ">
                <AiOutlineHome size={20}/>
                <span className="pl-2">Home</span>
              </div>
              <div className="cursor-pointer " >
                <span>Blog</span>
              </div>
              <div className="cursor-pointer" >
                <span>About Us</span>
              </div>
              <div className="cursor-pointer" >
                <span>Contact Us</span>
              </div>
              <div className="cursor-pointer" >
                <span>Our experts</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
