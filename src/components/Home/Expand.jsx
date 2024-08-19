import { useState } from "react";
import ExpandCarousel from "./ExpandCarousel";

// Extra images to show..................!
import img1 from "../../../public/Images/1.gif";
import img2 from "../../../public/Images/2.gif";
import img3 from "../../../public/Images/3.gif";

const images = [img1, img2, img3];

const Expand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section
      className=""
      style={{
        background: "linear-gradient(90deg, #EFEFD2 0%, #EFEFD2 100%)",
        width: "100%",
      }}
    >
      <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-16 items-center">
          <div className="">
            <ExpandCarousel
              currentIndex={currentIndex}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          </div>
          <div className="flex lg:mt-0 mt-5">
            <img
              className="bg-transparent"
              src={images[currentIndex]}
              alt="GIF Image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expand;
