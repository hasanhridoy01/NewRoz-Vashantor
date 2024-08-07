import { useState } from "react";
import img from "../../../public/Images/expand/icon.png";

//Extra images show..................!
import img1 from '../../../public/Images/expand/Screen Mask.png';
import img2 from '../../../public/Images/expand/Screen Mask1.png';
import img3 from '../../../public/Images/expand/Screen Mask2.png';

const ExpandCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Expand your reach with a scalable localization platform",
      text: "Organize all your multilingual content in a single place. Upload multiple file formats, incorporate new strings into current files & tailor your localization workflow.",
      image: img,
    },
    {
      id: 2,
      title:
        "Manually add or upload keys & Values for seamless language conversion",
      text: "Organize all your multilingual content in a single place. Upload multiple file formats, incorporate new strings into current files & tailor your localization workflow.",
      image: img,
    },
    {
      id: 3,
      title: "Manage your Application release versions with minimal effort",
      text: "Organize all your multilingual content in a single place. Upload multiple file formats, incorporate new strings into current files & tailor your localization workflow.",
      image: img,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex-shrink-0 flex items-center justify-start lg:justify-start h-96 relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-14 h-14 object-cover"
            />
            {/* <img style={{ position: 'absolute', left: '50%' }} src={img3} alt="" /> */}
            <div className="relative z-10 text-left lg:text-left lg:p-0 p-0 lg:w-[700px] w-[380px]">
              <h4 className="font-bold lg:text-[48px] text-[18px] leading-[67px]" style={{ fontFamily: 'Barlow' }}>
                {slide.title}
              </h4>
              <p className="font-normal lg:text-[16px] text-[10px] leading-[30px] text-[#555555]" style={{ fontFamily: 'Poppins' }}>
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <button
          onClick={prevSlide}
          className="absolute bottom-4 text-white p-0 rounded-full"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 20.1299C0.5 9.36033 9.23045 0.629883 20 0.629883C30.7696 0.629883 39.5 9.36033 39.5 20.1299C39.5 30.8994 30.7696 39.6299 20 39.6299C9.23045 39.6299 0.5 30.8994 0.5 20.1299Z"
              fill="#F8F8E9"
            />
            <path
              d="M0.5 20.1299C0.5 9.36033 9.23045 0.629883 20 0.629883C30.7696 0.629883 39.5 9.36033 39.5 20.1299C39.5 30.8994 30.7696 39.6299 20 39.6299C9.23045 39.6299 0.5 30.8994 0.5 20.1299Z"
              stroke="#D5D58C"
            />
            <path
              d="M17.57 14.0596L11.5 20.1296L17.57 26.1996M28.5 20.1296H11.67"
              stroke="url(#paint0_linear_789_18139)"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_789_18139"
                x1="19.8744"
                y1="14.0596"
                x2="21.7889"
                y2="31.1052"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A9AC25" />
                <stop offset="1" stopColor="#455507" />
              </linearGradient>
            </defs>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute bottom-4 lg:left-16 left-16 text-white p-0 rounded-full "
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.5 20.1299C39.5 9.36033 30.7696 0.629883 20 0.629883C9.23045 0.629883 0.5 9.36033 0.5 20.1299C0.5 30.8994 9.23045 39.6299 20 39.6299C30.7696 39.6299 39.5 30.8994 39.5 20.1299Z"
              fill="#F8F8E9"
            />
            <path
              d="M39.5 20.1299C39.5 9.36033 30.7696 0.629883 20 0.629883C9.23045 0.629883 0.5 9.36033 0.5 20.1299C0.5 30.8994 9.23045 39.6299 20 39.6299C30.7696 39.6299 39.5 30.8994 39.5 20.1299Z"
              stroke="#D5D58C"
            />
            <path
              d="M22.43 14.0596L28.5 20.1296L22.43 26.1996M11.5 20.1296H28.33"
              stroke="url(#paint0_linear_789_18144)"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_789_18144"
                x1="20.1256"
                y1="14.0596"
                x2="18.2111"
                y2="31.1052"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A9AC25" />
                <stop offset="1" stopColor="#455507" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ExpandCarousel;
