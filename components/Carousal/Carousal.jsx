'use client';

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const Carousal = ({Hero}) => {
  return (
    <section className="w-full overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={800}
        swipeable
        emulateTouch
        showArrows={true}
      >
        {Hero.map((each, i) => (
          <div key={i} className="relative w-full h-[100vh] touch-pan-y">
            <Image
              src={each.img}
              alt={`Slide ${i}`}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
              <h1 className="text-3xl md:text-5xl font-bold">{each.head}</h1>
              <p className="text-sm md:text-lg mt-2 max-w-xl">{each.subhead}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Carousal;
