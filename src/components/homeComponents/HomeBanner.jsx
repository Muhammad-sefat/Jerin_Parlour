import { useRef } from "react";
import banner from "../../assets/homebanner.png";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
gsap.registerPlugin(SplitText);

const HomeBanner = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const splitTextHeader = new SplitText(headingRef.current, {
      type: "words",
    });
    const splitTextParagraph = new SplitText(paragraphRef.current, {
      type: "lines",
    });
    gsap.from(splitTextHeader.words, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.from(splitTextParagraph.lines, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.from(buttonRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className="bg-[#FFF8F5] text-black flex justify-between items-center w-full overflow-hidden px-22 py-28">
      <div className="w-full md:w-[60%]">
        <h2
          ref={headingRef}
          className="text-[36px] md:text-[52px] my-2 font-bold text-black"
        >
          BEAUTY SALON FOR <br /> EVERY WOMEN
        </h2>
        <p ref={paragraphRef} className="text-[#666666] py-2 w-[50%]">
          At our beauty salon, we believe every woman deserves to feel
          confident, radiant, and seen. Our expert stylists provide personalized
          care and exceptional services that celebrate your unique style and
          inner beauty.
        </p>
        <button
          ref={buttonRef}
          className="relative bg-[#f73d7b] text-white text-[14px] px-[18px] py-[12px] rounded-lg my-6 font-medium"
        >
          Get an Appointment
        </button>
      </div>
      <div ref={imageRef} className="flex-1">
        <img
          className="w-[85%] transition-transform duration-300 ease-in-out hover:scale-105"
          src={banner}
          alt="image"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
