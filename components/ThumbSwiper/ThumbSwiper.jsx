
// "use client"

// import { Swiper, SwiperSlide } from "swiper/react";
// import { useState } from "react";
// import { Navigation, Thumbs, FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// const ThumbSwiper = (planData) => {

//      const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     const [activeIndex, setActiveIndex] = useState(0);


//     return (
//         <div className=" flex flex-reverse  gap-8 " data-aos="fade-up">


//             <div className="">
//                 <Swiper
//                     onSwiper={setThumbsSwiper}
//                     spaceBetween={10}
//                     slidesPerView={4}
//                     freeMode={true}
//                     watchSlidesProgress={true}
//                     modules={[FreeMode, Navigation, Thumbs]}
//                     className="mySwiper"
//                 >
//                     {planData.map((plan, index) => (
//                         <SwiperSlide key={index}>
//                             <div
//                                 onClick={() => setActiveIndex(index)}
//                                 className={`p-4 rounded-xl shadow-md flex flex-col items-center cursor-pointer max-h-48 min-h-40 md:min-h-36 ${activeIndex === index
//                                     ? "bg-green-200 scale-105 border-2 "
//                                     : "bg-gray-100 hover:scale-105 hover:bg-white"
//                                     }`}
//                             >
//                                 <img
//                                     className={`w-16 h-16 object-contain  ${activeIndex === index ? "scale-110" : ""
//                                         }`}
//                                     src={plan.img}
//                                     alt={plan.title}
//                                 />
//                                 <h4 className="text-center font-semibold text-base font-medium md:text-xl">{plan.title}</h4>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>


//             <div className="mt-4">
//                 <Swiper
//                     spaceBetween={10}
//                     thumbs={{ swiper: thumbsSwiper }}
//                     modules={[FreeMode, Navigation, Thumbs]}
//                     className="mySwiper2"
//                     onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//                 >
//                     {planData.map((plan, index) => (
//                         <SwiperSlide key={index}>
//                             <div className=" bg-white rounded-xl flex flex-row items-center gap-4">
//                                 <div className="w-1/3 flex justify-center  items-center text-center">
//                                     <img
//                                         className={`w-40 h-40 object-contain  ${activeIndex === index ? "scale-110" : ""
//                                             }`}
//                                         src={plan.img}
//                                         alt={plan.title}
//                                     />
//                                 </div>

//                                 <div className="flex flex-col w-2/3">
//                                     <h2 className="text-2xl font-semibold antialiased font-serif text-cyan-900	">{plan.head}</h2>
//                                     <p className="text-gray-600">{plan.desc}</p>
//                                 </div>

//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     )
// }

// export default ThumbSwiper;