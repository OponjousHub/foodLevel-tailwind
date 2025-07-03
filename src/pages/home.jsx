import pizza from "../assets/pizza.jpg";
import logo from "../assets/logo.png";
import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
import classes from "./home.module.css";

export default function Home() {
  return (
    <>
      <header className="flex gap-[3rem] container">
        <div className="w-[28rem] h-[22rem]">
          <img src={pizza} alt="Sliding image" className="h-[22rem] w-[100%]" />
        </div>
        <div>
          <div className=" mt-[4rem]">
            <h1 className="text-[2.2rem] uppercase gradient2 font-bold family-Montserrat max-w-[28rem] leading-[1.4]">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="text-2xl mt-[1.5rem] text-amber-50">
              Taste & share food from all over the world.
            </p>
          </div>
          <div className={classes.cta}>
            {/* <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link> */}
          </div>
        </div>
      </header>
      <main className="bg-[#393634] container my-[2rem] py-[2rem] px-[5rem]">
        <section>
          <h2>How it works</h2>
          <p className="para">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="para">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section>
          <h2>Why NextLevel Food?</h2>
          <p className="para">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="para">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
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
