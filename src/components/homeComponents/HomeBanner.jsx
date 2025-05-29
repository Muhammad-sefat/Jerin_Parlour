import banner from "../../assets/homebanner.png";

const HomeBanner = () => {
  return (
    <div className="bg-[#E5E5E5] text-black p-6 flex justify-between items-center">
      <div className="w-full md:w-[50%]">
        <h2 className="text-[36px] md:text-[52px] my-5 font-semibold text-black">
          BEAUTY SALON FOR EVERY WOMEN
        </h2>
        <p className="text-[#666666] py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat{" "}
        </p>
        <button className="bg-pink-600 px-[18px] py-[12px] rounded-lg my-6">
          Get an Appointment
        </button>
      </div>
      <div className="flex-1">
        <img src={banner} alt="image" />
      </div>
    </div>
  );
};

export default HomeBanner;
