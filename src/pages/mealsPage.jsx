import { Link } from "react-router-dom";
import burger from "../assets/burger.jpg";
import cury from "../assets/curry.jpg";
import dumplings from "../assets/dumplings.jpg";
import macncheese from "../assets/macncheese.jpg";
import pizza from "../assets/pizza.jpg";
import schnitzel from "../assets/schnitzel.jpg";
import tomatoSalad from "../assets/tomato-salad.jpg";

const dummyMeals = [
  {
    id: "001",
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: burger,
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    instructions: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.

      2. Cook the patty:
         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

      3. Assemble the burger:
         Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

      4. Serve:
         Complete the assembly with the top bun and serve hot.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    id: "002",
    title: "Spicy Curry",
    slug: "spicy-curry",
    image: cury,
    summary:
      "A rich and spicy curry, infused with exotic spices and creamy coconut milk.",
    instructions: `
      1. Chop vegetables:
         Cut your choice of vegetables into bite-sized pieces.

      2. Sauté vegetables:
         In a pan with oil, sauté the vegetables until they start to soften.

      3. Add curry paste:
         Stir in 2 tablespoons of curry paste and cook for another minute.

      4. Simmer with coconut milk:
         Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.

      5. Serve:
         Enjoy this creamy curry with rice or bread.
    `,
    creator: "Max Schwarz",
    creator_email: "max@example.com",
  },
  {
    id: "003",
    title: "Homemade Dumplings",
    slug: "homemade-dumplings",
    image: dumplings,
    summary:
      "Tender dumplings filled with savory meat and vegetables, steamed to perfection.",
    instructions: `
      1. Prepare the filling:
         Mix minced meat, shredded vegetables, and spices.

      2. Fill the dumplings:
         Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.

      3. Steam the dumplings:
         Arrange dumplings in a steamer. Steam for about 10 minutes.

      4. Serve:
         Enjoy these dumplings hot, with a dipping sauce of your choice.
    `,
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
  },
  {
    id: "004",
    title: "Classic Mac n Cheese",
    slug: "classic-mac-n-cheese",
    image: macncheese,
    summary:
      "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
    instructions: `
      1. Cook the macaroni:
         Boil macaroni according to package instructions until al dente.

      2. Prepare cheese sauce:
         In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.

      3. Combine:
         Mix the cheese sauce with the drained macaroni.

      4. Bake:
         Transfer to a baking dish, top with breadcrumbs, and bake until golden.

      5. Serve:
         Serve hot, garnished with parsley if desired.
    `,
    creator: "Laura Smith",
    creator_email: "laurasmith@example.com",
  },
  {
    id: "005",
    title: "Authentic Pizza",
    slug: "authentic-pizza",
    image: pizza,
    summary:
      "Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.",
    instructions: `
      1. Prepare the dough:
         Knead pizza dough and let it rise until doubled in size.

      2. Shape and add toppings:
         Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.

      3. Bake the pizza:
         Bake in a preheated oven at 220°C for about 15-20 minutes.

      4. Serve:
         Slice hot and enjoy with a sprinkle of basil leaves.
    `,
    creator: "Mario Rossi",
    creator_email: "mariorossi@example.com",
  },
  {
    id: "006",
    title: "Wiener Schnitzel",
    slug: "wiener-schnitzel",
    image: schnitzel,
    summary:
      "Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.",
    instructions: `
      1. Prepare the veal:
         Pound veal cutlets to an even thickness.

      2. Bread the veal:
         Coat each cutlet in flour, dip in beaten eggs, and then in breadcrumbs.

      3. Fry the schnitzel:
      Heat oil in a pan and fry each schnitzel until golden brown on both sides.

      4. Serve:
      Serve hot with a slice of lemon and a side of potato salad or greens.
 `,
    creator: "Franz Huber",
    creator_email: "franzhuber@example.com",
  },
  {
    id: "007",
    title: "Fresh Tomato Salad",
    slug: "fresh-tomato-salad",
    image: tomatoSalad,
    summary:
      "A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.",
    instructions: `
      1. Prepare the tomatoes:
        Slice fresh tomatoes and arrange them on a plate.
    
      2. Add herbs and seasoning:
         Sprinkle chopped basil, salt, and pepper over the tomatoes.
    
      3. Dress the salad:
         Drizzle with olive oil and balsamic vinegar.
    
      4. Serve:
         Enjoy this simple, flavorful salad as a side dish or light meal.
    `,
    creator: "Sophia Green",
    creator_email: "sophiagreen@example.com",
  },
];

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
        {dummyMeals.map((meal) => (
          <article key={meal.id} className=" min-w-[18rem] bg-[#000]">
            <img
              src={meal.image}
              alt={`photo of ${meal.title}`}
              className="w-[28rem] h-[12.7rem]"
            />
            <div className="flex flex-col gap-3 pl-4 pr-4 pb-4">
              <div className="flex flex-col gap-0">
                <h3 className="text-amber-50 font-bold text-[1.4rem]">
                  {meal.title}
                </h3>
                <p className="text-[10px] text-[#aaa]">
                  By <span>{meal.creator}</span>
                </p>
              </div>
              <p className="text-[#ddd] leading-5 text-[0.9rem]">
                {meal.summary}
              </p>
              <Link to={meal.id}>
                <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1 self-end">
                  View details
                </button>
              </Link>
            </div>
          </article>
        ))}
      </main>
    </>
  );
}

export default MealsPage;

export async function loader() {
  // const response = await fetch(`http://127.0.0.1:4000/api/v1/meals`);
  // if (!response.ok) return response;
  // return response;
}
