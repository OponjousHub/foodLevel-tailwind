import logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="flex justify-between container gradient1 px-[2rem] mb-[2rem]">
      <div className="flex items-center gap-6 py-[0.5rem]">
        <img src={logo} alt="food logo" className="w-20 " />
        <p className="text-2xl text-amber-50">NEXTLEVEL FOODIE</p>
      </div>
      <div className="flex gap-8 items-center text-[18px] font-bold text-amber-50">
        <p className="text-[1.2rem]">Browse food</p>
        <p className="text-[1.2rem]">Food community</p>
      </div>
    </nav>
  );
}

export default Header;
