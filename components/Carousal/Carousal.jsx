'use client';

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

const Carousal = ({ Hero }) => {
  return (
    <section className="w-full overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={800}
        swipeable={true}
        emulateTouch
        showArrows={false}
      >
        {Hero.map((each, i) => (
          <div key={i} className="relative w-full h-[100vh] touch-pan-y">
            {/* Carousel Image */}
            <Image
              src={each.img}
              alt={`Slide ${i}`}
              fill
              priority
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center md:justify-start md:items-start text-white  p-4 mt-2m">
              <h1 className="font-black text-2xl md:text-4xl lg:text-5xl leading-tight">{each.head}</h1>
              <p className="font-medium text-lg text-gray-700 leading-tigh">{each.subhead}</p>
              <Link href="/partnerwithus">
                <button className="px-6 py-3 bg-blue-900 hover:bg-blue-950 transition-all rounded-xl text-white font-bold text-lg">
                  Partner With Us
                </button>
              </Link>

            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Carousal;
