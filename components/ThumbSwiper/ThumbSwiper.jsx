"use client"


import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ThumbSwiper = ({ planData }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState("horizontal");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setDirection(mobile ? "vertical" : "horizontal");
        };

        handleResize(); // initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className=" px-4  md:px-32" data-aos="fade-up">
            <Swiper
                direction={direction}
                onSwiper={setThumbsSwiper}
                spaceBetween={0}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={`h-full  ${direction === "vertical" ? "max-h-[400px]" : ""}`}
            >
                {planData.map((plan, index) => (
                    <SwiperSlide key={index}>
                        <div
                            onClick={() => setActiveIndex(index)}
                            className={`relative p-4 font-bold flex flex-col items-center cursor-pointer touch-pan-y ${activeIndex === index
                                ? "bg-blue-950 scale-105 text-white"
                                : "bg-gray-100 text-blue-950 md:border-x-1"
                                }`}
                        >
                            {plan.icon && <div className=" md:text-4xl mb-2 ">{plan.icon}</div>}
                            <h4 className="text-center text-base md:text-xl">{plan.title}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Description below swiper for mobile */}
            {planData[activeIndex] && (
                <div className="mt-4   flex flex-col md:flex-row items-start  px-2 md:px-32 w-full ">
                        <p className="text-blue-950 text-lg font-semibold">{planData[activeIndex].desc}</p>
                </div>
            )}
        </div>
    );
};

export default ThumbSwiper;
