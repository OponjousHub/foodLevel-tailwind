import ShearForm from "../components/shear-form";

function ShearMealPage() {
  return (
    <>
      <header className="flex gap-[3rem] container">
        <div className=" flex flex-col space-y-6 pl-[3rem] my-7">
          <h1 className="text-[2.2rem] uppercase text-amber-50 font-bold family-Montserrat mb-2">
            Shear your <span>favorite meal</span>
          </h1>
          <p className="text-[1.2rem] text-amber-50 leading-7">
            Or any other meal your want to shear.
          </p>
        </div>
      </header>
      <ShearForm />
    </>
  );
}

export default ShearMealPage;
