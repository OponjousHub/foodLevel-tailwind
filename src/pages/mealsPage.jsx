import { Link } from "react-router-dom";
import pizza from "../assets/pizza.jpg";
import schnitzel from "../assets/schnitzel.jpg";
import burger from "../assets/burger.jpg";

function MealsPage() {
  return (
    <>
      <header className="flex gap-[3rem] container">
        <div className=" flex flex-col space-y-6 pl-[3rem] my-7">
          <h1 className="text-[2.2rem] uppercase text-amber-50 font-bold family-Montserrat mb-2">
            Delicious Meals created <span> by you</span>
          </h1>

          <p className="text-[1.2rem] text-amber-50 leading-7">
            Choose your favorite recipe and cook it yourself. It is easy and
            fun.
          </p>
          <Link to={"/meals/shear"}>
            <button className="btnCSS w-[17rem]">
              Shear Your Favorite Recipe
            </button>
          </Link>
        </div>
      </header>
      <main className=" container my-[1rem] py-[2rem] grid grid-cols-3 gap-x-14 gap-y-14">
        <article className=" min-w-[18rem] bg-[#000]">
          <img
            src={pizza}
            alt="photo of pizza"
            className="w-[28rem] h-[12.7rem]"
          />
          <div className="flex flex-col gap-3 pl-4 pr-4 pb-4">
            <div className="flex flex-col gap-0">
              <h3 className="text-amber-50 font-bold text-[1.4rem]">
                Authentic Pizza
              </h3>
              <p className="text-[10px] text-[#aaa]">
                By <span>Mario Rossi</span>
              </p>
            </div>
            <p className="text-[#ddd] leading-5 text-[0.9rem]">
              Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and
              melted cheese.
            </p>
            <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1 self-end">
              View details
            </button>
          </div>
        </article>
        <article className=" min-w-[18rem] bg-[#000]">
          <img
            src={schnitzel}
            alt="photo of pizza"
            className="w-[28rem] h-[12.7rem]"
          />
          <div className="flex flex-col gap-3 pl-4 pr-4 pb-4">
            <div className="flex flex-col gap-0">
              <h3 className="text-amber-50 font-bold text-[1.4rem]">
                Authentic Pizza
              </h3>
              <p className="text-[10px] text-[#aaa]">
                By <span>Mario Rossi</span>
              </p>
            </div>
            <p className="text-[#ddd] leading-5 text-[0.9rem]">
              Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and
              melted cheese.
            </p>
            <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1 self-end">
              View details
            </button>
          </div>
        </article>
        <article className=" min-w-[18rem] bg-[#000]">
          <img
            src={burger}
            alt="photo of pizza"
            className="w-[28rem] h-[12.7rem]"
          />
          <div className="flex flex-col gap-3 pl-4 pr-4 pb-4">
            <div className="flex flex-col gap-0">
              <h3 className="text-amber-50 font-bold text-[1.4rem]">
                Authentic Pizza
              </h3>
              <p className="text-[10px] text-[#aaa]">
                By <span>Mario Rossi</span>
              </p>
            </div>
            <p className="text-[#ddd] leading-5 text-[0.9rem]">
              Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and
              melted cheese.
            </p>
            <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1 self-end">
              View details
            </button>
          </div>
        </article>
        <article className=" min-w-[18rem] bg-[#000]">
          <img
            src={pizza}
            alt="photo of pizza"
            className="w-[28rem] h-[14rem]"
          />
          <div className="flex flex-col gap-3 pl-3 pr-3 pb-3">
            <div className="flex flex-col gap-0">
              <h3 className="text-amber-50 font-bold text-[1.4rem]">
                Authentic Pizza
              </h3>
              <p className="text-[10px] text-[#aaa]">
                By <span>Mario Rossi</span>
              </p>
            </div>
            <p className="text-[#ddd] leading-5 text-[0.9rem]">
              Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and
              melted cheese.
            </p>
            <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1 self-end">
              View details
            </button>
          </div>
        </article>
        <article className=" min-w-[18rem] bg-[#000]">
          <img
            src={pizza}
            alt="photo of pizza"
            className="w-[28rem] h-[14rem]"
          />
          <div className="flex flex-col gap-3 pl-3 pr-3 pb-3">
            <div className="flex flex-col gap-0">
              <h3 className="text-amber-50 font-bold text-[1.4rem]">
                Authentic Pizza
              </h3>
              <p className="text-[10px] text-[#aaa]">
                By <span>Mario Rossi</span>
              </p>
            </div>
            <p className="text-[#ddd] leading-5 text-[0.9rem]">
              Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and
              melted cheese.
            </p>
            <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1 self-end">
              View details
            </button>
          </div>
        </article>
        <article className=" min-w-[18rem] bg-[#000]">
          <img
            src={pizza}
            alt="photo of pizza"
            className="w-[28rem] h-[14rem]"
          />
          <div className="flex flex-col gap-3 pl-3 pr-3 pb-3">
            <div className="flex flex-col gap-0">
              <h3 className="text-amber-50 font-bold text-[1.4rem]">
                Authentic Pizza
              </h3>
              <p className="text-[10px] text-[#aaa]">
                By <span>Mario Rossi</span>
              </p>
            </div>
            <p className="text-[#ddd] leading-5 text-[0.9rem]">
              Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and
              melted cheese.
            </p>
            <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1 self-end">
              View details
            </button>
          </div>
        </article>
        <article className=" min-w-[18rem] bg-[#000]">
          <img
            src={pizza}
            alt="photo of pizza"
            className="w-[28rem] h-[14rem]"
          />
          <div className="flex flex-col gap-3 pl-3 pr-3 pb-3">
            <div className="flex flex-col gap-0">
              <h3 className="text-amber-50 font-bold text-[1.4rem]">
                Authentic Pizza
              </h3>
              <p className="text-[10px] text-[#aaa]">
                By <span>Mario Rossi</span>
              </p>
            </div>
            <p className="text-[#ddd] leading-5 text-[0.9rem]">
              Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and
              melted cheese.
            </p>
            <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1 self-end">
              View details
            </button>
          </div>
        </article>
        <article className=" min-w-[18rem] bg-[#000]">
          <img
            src={pizza}
            alt="photo of pizza"
            className="w-[28rem] h-[14rem]"
          />
          <div className="flex flex-col gap-3 pl-3 pr-3 pb-3">
            <div className="flex flex-col gap-0">
              <h3 className="text-amber-50 font-bold text-[1.4rem]">
                Authentic Pizza
              </h3>
              <p className="text-[10px] text-[#aaa]">
                By <span>Mario Rossi</span>
              </p>
            </div>
            <p className="text-[#ddd] leading-5 text-[0.9rem]">
              Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and
              melted cheese.
            </p>
            <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1 self-end">
              View details
            </button>
          </div>
        </article>
        <article className=" min-w-[18rem] bg-[#000]">
          <img
            src={pizza}
            alt="photo of pizza"
            className="w-[28rem] h-[14rem]"
          />
          <div className="flex flex-col gap-3 pl-3 pr-3 pb-3">
            <div className="flex flex-col gap-0">
              <h3 className="text-amber-50 font-bold text-[1.4rem]">
                Authentic Pizza
              </h3>
              <p className="text-[10px] text-[#aaa]">
                By <span>Mario Rossi</span>
              </p>
            </div>
            <p className="text-[#ddd] leading-5 text-[0.9rem]">
              Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and
              melted cheese.
            </p>
            <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1 self-end">
              View details
            </button>
          </div>
        </article>
      </main>
    </>
  );
}

export default MealsPage;
