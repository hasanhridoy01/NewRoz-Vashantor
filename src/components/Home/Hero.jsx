import "./Hero.css";
import img1 from "../../../public/Images/hero/body.png";
import img2 from "../../../public/Images/hero/prime_language.svg";

//Extra Images..............!
import img3 from "../../../public/Images/hero/Title.png";
import img4 from "../../../public/Images/hero/Hanguages.png";
import { useState } from "react";
import BookModal from "../BookModal/BookModal";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return (
    <div className="hero lg:h-[1060px] h-[700px] lg:px-[0] px-5">
      <h2 className="hero-title lg:text-[64px] text-[56px] lg:leading-[76px] leading-[67px]">
        Fast, Easy, & Accurate
      </h2>
      <h3 className="hero-title-two lg:mt-0 mt-2 lg:text-[56px] text-[40px] lg:leading-[67px] leading-[47px]">
        online translation portal
      </h3>
      <div className="md:flex flex-col lg:items-center lg:justify-center hidden">
        <h5 className="hero-paragraph">
          Hundreds of companies rely on Vashantor’s platform to accurately
          translate and localize content
        </h5>
        <h5 className="hero-paragraph-two">
          into any language and any media at scale.
        </h5>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center lg:gap-5 gap-1 mt-2">
        <button className="book-button" onClick={onOpenModal}>Book A Meeting</button>
        {/* modal */}
        <BookModal open={openModal} onClose={onCloseModal} />
        <button className="quick-button">Quick Demo Video</button>
      </div>

      <div className="hidden lg:flex">
        <div className="">
          <img className="left-image animate-move" src={img2} alt="" />
          <img className="left-image-two animate-move-two" src={img2} alt="" />
          <img className="right-image animate-move-three" src={img2} alt="" />
          <img
            className="right-image-two animate-move-four"
            src={img2}
            alt=""
          />
        </div>
        <div className="">
          <img className="image-over-One" src={img3} alt="" />
          <img className="image-over-Two" src={img4} alt="" />
        </div>
      </div>
      <div className="body-images hidden lg:flex">
        <img src={img1} alt="Hero Illustration" />
      </div>
    </div>
  );
};

export default Hero;
