import { useState } from "react";
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
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

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
              className="min-w-full lg:min-w-[485px] flex flex-col justify-center items-center p-5"
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-24 h-24 lg:w-[120px] lg:h-[120px] object-cover mb-4"
              />
              <div className="text-center">
                <p className="text-lg font-semibold">
                  {slide.testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {slide.testimonial.position}
                </p>
                <p className="mt-2 text-base italic">
                  {slide.testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
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
