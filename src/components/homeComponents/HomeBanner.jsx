import banner from "../../assets/homebanner.png";

const HomeBanner = () => {
  return (
    <div className="bg-[#E5E5E5] text-black flex justify-between items-center w-full overflow-hidden p-28 mb-22">
      <div className="w-full md:w-[60%]">
        <h2 className="text-[36px] md:text-[52px] my-2 font-semibold text-black">
          BEAUTY SALON FOR <br /> EVERY WOMEN
        </h2>
        <p className="text-[#666666] py-2 w-[50%]">
          At our beauty salon, we believe every woman deserves to feel
          confident, radiant, and seen. Our expert stylists provide personalized
          care and exceptional services that celebrate your unique style and
          inner beauty.
        </p>
        <button className="bg-[#f73d7b] text-white px-[18px] py-[12px] rounded-lg my-6 font-medium sclhover">
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
