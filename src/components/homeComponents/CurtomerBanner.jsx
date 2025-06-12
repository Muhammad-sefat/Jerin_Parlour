import { useInView } from "react-intersection-observer";
import banner from "../../assets/CustomerBanner.png";
import CountUp from "react-countup";
const CurtomerBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="bg-[#FFF8F5] text-black flex justify-between  w-full overflow-hidden px-22 py-28">
      <div className="w-full md:w-[50%]">
        <img
          className="w-[86%] transition-transform duration-300 ease-in-out hover:scale-105"
          src={banner}
          alt="image"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-[16px] md:text-[42px] my-2 font-bold text-black">
          Let us handle your <br /> screen{" "}
          <span className="text-[#f73d7b]">Professionally</span>.
        </h2>
        <p className="text-[#666666] py-2 w-full md:w-[60%]">
          With well written codes, we build amazing apps for all platforms,
          mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Purus commodo ipsum.
        </p>
        <div ref={ref} className="flex items-center gap-16 my-16">
          <div>
            <p className="text-5xl font-bold mb-2 text-[#f73d7b]">
              {inView && <CountUp end={500} duration={2} />}+
            </p>
            <p className="text-lg font-medium">Happy Customer</p>
          </div>
          <div>
            <p className="text-5xl font-bold mb-2 text-[#f73d7b]">
              {inView && <CountUp end={16} duration={2} />}+
            </p>
            <p className="text-lg font-medium">Total Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurtomerBanner;
