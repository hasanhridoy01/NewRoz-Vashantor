import { useState, useEffect } from "react";
import img from "../../../public/Images/testimonial/Item.png";

const slides = [
  {
    image: img,
    testimonial: {
      name: "John Doe",
      position: "CEO of Example Corp",
      text: "This is an amazing product! It has revolutionized the way we do business. Highly recommend!",
    },
  },
  {
    image: img,
    testimonial: {
      name: "Jane Smith",
      position: "Marketing Director at Demo Inc.",
      text: "Fantastic service and support. The team went above and beyond to ensure our satisfaction.",
    },
  },
  {
    image: img,
    testimonial: {
      name: "Emily Johnson",
      position: "Product Manager at Widget Co.",
      text: "Excellent value for money. The quality of the product exceeded our expectations.",
    },
  },
  {
    image: img,
    testimonial: {
      name: "Emily Johnson",
      position: "Product Manager at Widget Co.",
      text: "Excellent value for money. The quality of the product exceeded our expectations.",
    },
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative w-full lg:w-[475px] lg:h-[320px] mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full lg:min-w-[475px] flex flex-col"
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                className="w-24 h-24 lg:w-[120px] lg:h-[120px] object-cover mb-4 mx-auto"
              />
              <div className="text-center">
                <p
                  className="text-lg font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {slide.testimonial.name}
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "Poppins" }}
                >
                  {slide.testimonial.position}
                </p>
                <p className="mt-2 text-base" style={{ fontFamily: "Poppins" }}>
                  {slide.testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:mt-8 mt-5 bottom-4 left-0 right-0 flex items-center justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full border-2 border-[#687535] ${
              index === activeIndex ? "bg-[#687535]" : "bg-[#D2D2D2]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
