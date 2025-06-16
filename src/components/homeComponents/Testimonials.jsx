import { Star } from "lucide-react";
import star1 from "../../assets/star1.png";
import star2 from "../../assets/star2.png";
import star3 from "../../assets/star3.png";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      img: star1,
      name: "Nash Patrik",
      title: "CEO , Manpol",
      text: "It was my first visit and I’m honestly blown away. The ambiance, the staff, and the service were all top-tier. I left feeling like a brand new version of myself!",
    },
    {
      img: star2,
      name: "Jenny Smith",
      title: "COO , TechCo",
      text: "I’ve been coming here for over a year now. Every time I leave, I feel more confident and refreshed. They really understand beauty and client care",
    },
    {
      img: star3,
      name: "Alex Johnson",
      title: "Founder , StartX",
      text: "I treated myself to a spa day and it was heavenly! The facial and massage were incredibly relaxing. Definitely coming back for more self-care days",
    },
    {
      img: star1,
      name: "Jonathon Partex",
      title: "CFO , Manpol",
      text: "Perfect spot for busy professionals! They respect your time, offer expert styling, and always greet you with a smile. It’s my go-to beauty retreat",
    },
    {
      img: star2,
      name: "Jenny Markson",
      title: "COO , TechCo",
      text: "They absolutely nailed my bridal look! From makeup to hair, everything was flawless and exactly how I dreamed it. Highly recommend them for weddings!",
    },
  ];
  return (
    <div className="bg-white text-black px-20 py-12">
      <h3 className="text-xl md:text-4xl font-bold text-center py-6 md:py-10">
        Testimonials
      </h3>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide className="mb-12" key={idx}>
            <div className="p-5 rounded bg-white shadow-md h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-4 py-4">
                <img
                  className="w-16 rounded-full"
                  src={item.img}
                  alt="client"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-[13px] font-medium">{item.title}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">{item.text}</p>
              <div className="flex items-center gap-2 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-orange-500 w-4 h-4" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
