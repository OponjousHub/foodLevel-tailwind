import Header from "../components/header";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer className="bg-[#000] container p-[1rem] flex justify-around">
        <div className="flex flex-col gap-6 w-[10rem]">
          <div className="flex self-center mt-7">
            <img src={logo} alt="Footer logo" className="w-[5rem] " />
          </div>
          <div className="flex gap-7">
            <FacebookLogo size={32} className="cursor-pointer fill-[#aaa]" />
            <InstagramLogo size={32} className="cursor-pointer fill-[#aaa]" />
            <XLogo size={32} className="cursor-pointer fill-[#aaa]" />
          </div>
        </div>
        <div className="w-[10rem]">
          <h2>Contact</h2>
          <div>
            <p className="mb-3 cursor-pointer ">
              17, Akwusi anuogu street, Sambisa
            </p>
            <p className="mb-3 cursor-pointer ">+2348063702221</p>
            <p className="mb-3 cursor-pointer ">nextfood@gmail.com</p>
          </div>
        </div>
        <div className="w-[10rem]">
          <h2>Company</h2>
          <div>
            <p className="mb-3 cursor-pointer ">For business</p>
            <p className="mb-3 cursor-pointer ">About NextLevelFood</p>
            <p className="mb-3 cursor-pointer ">Careers</p>
            <p className="mb-3 cursor-pointer ">Cooking partners</p>
          </div>
        </div>
        <div className="w-[10rem]">
          <h2>Resources</h2>
          <div>
            <p className="mb-3 cursor-pointer ">Recipe directory</p>
            <p className="mb-3 cursor-pointer ">Privacy & terms</p>
            <p className="mb-3 cursor-pointer ">Help center</p>
          </div>
        </div>
      </footer>
      <div className="bg-[#393634] container text-center text-[12px] py-2 text-[#ccc]">
        copyright © 2025 byNEXTLEVELFOOD, Inc. All rights reserved
      </div>
    </>
  );
}

export default RootLayout;
