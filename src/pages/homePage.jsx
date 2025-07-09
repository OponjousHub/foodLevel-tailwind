import { Link } from "react-router-dom";
import pizza from "../assets/pizza.jpg";

export default function HomePage() {
  return (
    <>
      <header className="flex gap-[3rem] container">
        <div className="w-[28rem] h-[22rem]">
          <img src={pizza} alt="Sliding image" className="h-[22rem] w-[100%]" />
        </div>
        <div>
          <div className=" mt-[3rem]">
            <h1 className="text-[2.2rem] uppercase gradient2 font-bold family-Montserrat max-w-[28rem] leading-[1.4]">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="text-2xl mt-[1.5rem] text-amber-50">
              Taste & share food from all over the world.
            </p>
          </div>
          <div className="flex gap-8 items-center mt-7">
            <p className="text-[1.4rem] text-amber-400 ">Join our community</p>
            <Link to={"meals"}>
              <button className="btnCSS">Explore Meals</button>
            </Link>
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
    </>
  );
}
