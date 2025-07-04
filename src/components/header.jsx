import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="flex justify-between container gradient1 px-[2rem] mb-[2rem]">
      <div className="flex items-center gap-6 py-[0.5rem]">
        <img src={logo} alt="food logo" className="w-20 " />
        <NavLink to={"/"} className="text-2xl text-amber-50">
          NEXTLEVEL FOODIE
        </NavLink>
      </div>
      <div className="flex gap-8 items-center text-[18px] font-bold text-amber-50">
        <NavLink to={"meals"} className="text-[1.2rem]">
          Browse food
        </NavLink>
        <NavLink to={"community"} className="text-[1.2rem]">
          Food community
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
