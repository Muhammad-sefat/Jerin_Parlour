import women from "../../assets/women.png";
import color from "../../assets/color.png";
import facial from "../../assets/facial.png";

const HomeService = () => {
  return (
    <div className="p-22 bg-white">
      <h2 className="text-black text-4xl font-bold text-center">
        Our Awesome <span className="text-[#f73d7b]">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-22 mb-6">
        <div className="text-center py-5 rounded-lg bg-white  hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <div className="flex justify-center">
            <img
              src={women}
              alt="women"
              className="w-20 h-20 object-cover rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <h2 className="text-black text-xl my-2 font-medium">
            Anti Age Face Treatment
          </h2>
          <p className="text-[#f73d7b] font-semibold text-lg">$199</p>
          <p className="text-gray-700 mt-2 w-[70%] mx-auto">
            We craft stunning and amazing web UI, using a well drafted UX to fit
            your product.
          </p>
        </div>
        <div className="text-center py-5 rounded-lg bg-white  hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <div className="flex justify-center">
            <img
              src={color}
              alt="women"
              className="w-20 h-20 object-cover rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <h2 className="text-black text-xl my-2 font-medium">
            Hair Color & Styleing
          </h2>
          <p className="text-[#f73d7b] font-semibold text-lg">$99</p>
          <p className="text-gray-700 mt-2 w-[70%] mx-auto">
            Amazing flyers, social media posts and brand representations that
            would make your brand stand out.
          </p>
        </div>
        <div className="text-center py-5 rounded-lg bg-white  hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <div className="flex justify-center">
            <img
              src={facial}
              alt="women"
              className="w-20 h-20 object-cover rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <h2 className="text-black text-xl my-2 font-medium">
            Skin Care Treatment
          </h2>
          <p className="text-[#f73d7b] font-semibold text-lg">$299</p>
          <p className="text-gray-700 mt-2 w-[70%] mx-auto">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#f73d7b] text-white text-[14px] px-[18px] py-[12px] rounded-lg my-6 font-medium sclhover">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HomeService;
