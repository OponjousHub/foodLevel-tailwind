function ShearForm() {
  return (
    <form className="community-form border-none my-10">
      <div className="flex gap-6">
        <div className="flex flex-col gap-[12px] w-[50%] mb-7">
          <label
            htmlFor="name"
            className="text-amber-50 font-bold text-[1rem] mb-0"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            className=" bg-[#333] p-[7px] mt-0 text-[#ccc] rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[12px] w-[50%]">
          <label
            htmlFor="email"
            className="text-amber-50 font-bold text-[1rem]"
          >
            Your Email
          </label>
          <input
            type="text"
            id="email"
            className="bg-[#333] p-[7px] text-[#ccc] rounded-[6px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-[12px]">
          <label
            htmlFor="title"
            className="text-amber-50 font-bold text-[1rem]"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-[#333] p-[7px] text-[#ccc] rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <label
            htmlFor="summary"
            className="text-amber-50 font-bold text-[1rem]"
          >
            Brief Summary
          </label>
          <input
            type="text"
            id="summary"
            className="bg-[#333] p-[7px] text-[#ccc] rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <label
            htmlFor="description"
            className="text-amber-50 font-bold text-[1rem]"
          >
            Brief Summary
          </label>
          <textarea
            type="text"
            id="description"
            className="bg-[#333] p-[7px] text-[#ccc] rounded-[6px]"
            rows={4}
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="file"
            className="bg-[#333] p-2 w-[14rem] rounded-[6px]"
          />
          <button className="btnCSS w-[10rem] self-end">Shear meal</button>
        </div>
      </div>
    </form>
  );
}

export default ShearForm;
