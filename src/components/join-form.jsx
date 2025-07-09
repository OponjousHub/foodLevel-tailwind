function JoinForm() {
  return (
    <form className="community-form">
      <h2>Join community to shear meal</h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-[12px]">
          <label htmlFor="name" className="text-amber-50 font-bold text-[1rem]">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className=" border-1 border-solid border-amber-50 p-[7px] text-[#ccc] rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <label htmlFor="name" className="text-amber-50 font-bold text-[1rem]">
            Your Email
          </label>
          <input
            type="text"
            id="name"
            className="border-1 border-solid border-amber-50 p-[7px] text-[#ccc] rounded-[6px]"
          />
        </div>
        <button className="btnCSS w-[10rem] self-end">Join now</button>
      </div>
    </form>
  );
}

export default JoinForm;
