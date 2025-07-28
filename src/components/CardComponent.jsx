// components/Carousel.jsx
"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const CarouselDarkVariantExample = ({path,label,title,customcss}) => {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto rounded-md overflow-hidden shadow-lg justify-center items-center">
      <div className={`title mb-10 text-2xl font-bold text-(--font_color) ${customcss} `}>{title}</div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={600}
        emulateTouch
      >
        {/* Slide 1 */}
        <div>
          <Image
            src= {path[0]}
            alt="Slide 1"
            width={1200}
            height={500}
            className="object-cover rounded-md"
          />
          <p className="legend">{label[0]}</p>
        </div>

        {/* Slide 2 */}
        <div>
          <Image
            src= {path[1]}
            alt="Slide 2"
            width={1200}
            height={500}
            className="object-cover rounded-md"
          />
          <p className="legend">{label[1]}</p>
        </div>

        {/* Slide 3 */}
        <div>
          <Image
            src= {path[2]}
            alt="Slide 3"
            width={1200}
            height={500}
            className="object-cover rounded-md"
          />
          <p className="legend">{label[2]}</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselDarkVariantExample;

// /#e60914