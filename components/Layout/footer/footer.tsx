import React from "react";
import { BsFillHouseDoorFill,BsFillPhoneFill,BsWhatsapp } from "react-icons/bs";
import { SiGumroad } from "react-icons/si";
import { MdPlace,MdEmail } from "react-icons/md";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-purple-100">
        <div className="mx-auto max-w-7xl px-2  h-[250px]">
          <div className="py-5 md:justify-start md:space-x-10 grid grid-cols-4">
            <div className="lg:w-auto lg:flex-1">
              <span className="text-white">ABOUT US</span>
              <div className="py-2">
                {/* <Image
                  width={80}
                  height={80}
                  src="/TexSuppliers.png"
                  alt="logo"
                /> */}
                <p>Auto Care</p>
              </div>
              <span className="text-white text-justify">
                Texsuppliers.com is an all in one reliable and trustworthy
                online platform in Bangladesh.
              </span>
            </div>
            <div className="lg:w-auto lg:flex-1">
              <span className="text-white">ADDRESS</span>
              <div className="flex items-center py-2">
                <BsFillHouseDoorFill color="#fff" size={20}/>
                <span  className="text-white pl-2">
                    House #11
                </span>
              </div>
              <div className="flex items-center py-2">
                <SiGumroad color="#fff" size={20}/>
                <span  className="text-white pl-2">
                    Road #11
                </span>
              </div>
              <div className="flex items-center py-2">
                <MdPlace color="#fff" size={20}/>
                <span  className="text-white pl-2">
                   Sector-7, Uttara, Dhaka-1230
                </span>
              </div>
             
            </div>
            <div className="lg:w-auto lg:flex-1">
              <span className="text-white">CONTACT INFO</span>
              <div className="flex items-center py-2">
                <BsFillPhoneFill color="#fff" size={20}/>
                <span  className="text-white pl-2">
                    Phone: +880 1817646862
                </span>
              </div>
              <div className="flex items-center py-2">
                <MdEmail color="#fff" size={20}/>
                <span  className="text-white pl-2">
                    Email: jahirskhan927@gmail.com@
                </span>
              </div>
              <div className="flex items-center py-2">
                <BsWhatsapp color="#fff" size={20}/>
                <span  className="text-white pl-2">
                    Whatsapp: +880 1817646862
                </span>
              </div>
            </div>
            <div className="lg:w-auto lg:flex-1">
              <span className="text-white">SOCIAL LINKS</span>
              <div className="pt-2 flex items-center">
                <Image alt="facebook" width={40} height={40} className=' mx-[5px] cursor-pointer' src={'/assets/images/facebook.png'}/>
                <Image alt="instagram" width={40} height={40} className=' mx-[5px] cursor-pointer' src={'/assets/images/instagram.png'}/>
                <Image alt="youtube" width={40} height={40} className=' mx-[5px] cursor-pointer' src={'/assets/images/youtube.png'}/>
                <Image alt="linkedIn" width={40} height={40} className=' rounded-md mx-[5px] cursor-pointer bg-white' src={'/assets/images/linkedin.png'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
