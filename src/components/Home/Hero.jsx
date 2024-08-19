import "./Hero.css";
import img1 from "../../../public/Images/hero/body.png";
import img2 from "../../../public/Images/hero/prime_language.svg";

// Extra Images
import img3 from "../../../public/Images/hero/Title.png";
import img4 from "../../../public/Images/hero/Hanguages.png";
import { useRef, useState } from "react";
import BookModal from "../BookModal/BookModal";

// Hero Section Extra Images
import img5 from "../../../public/Images/hero/New-folder/body.png";
import Ellipse1 from "../../../public/Images/hero/New-folder/Ellipse-1.png";
import Ellipse2 from "../../../public/Images/hero/New-folder/Ellipse-2.png";
import Ellipse3 from "../../../public/Images/hero/New-folder/Ellipse-3.png";
import img9 from "../../../public/Images/hero/New-folder/Hanguages.png";
import img10 from "../../../public/Images/hero/New-folder/Title.png";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const onOpenVideo = () => setOpenVideo(true);
  const onCloseVideo = () => setOpenVideo(false);

  const videoPlayerRef = useRef(null);

  const handlePlayClick = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.playVideo();
    }
    onOpenVideo();
  };

  const modalStyles = {
    modal: {
      width: "80%" /* Adjust width as needed */,
      maxWidth: "800px" /* Maximum width */,
      height: "70%" /* Adjust height as needed */,
      maxHeight: "600px" /* Maximum height */,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
  };

  return (
    <div className="hero lg:h-[1060px] h-auto lg:px-0 px-5 lg:pb-0 pb-20">
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
        <button className="book-button" onClick={onOpenModal}>
          Book A Meeting
        </button>
        {/* modal */}
        <BookModal open={openModal} onClose={onCloseModal} />

        <button className="quick-button" onClick={handlePlayClick}>
          Quick Demo Video
        </button>
      </div>

      {/* Video Modal */}
      <Modal
        open={openVideo}
        onClose={onCloseVideo}
        center
        classNames={{
          modal: modalStyles.modal,
          closeIcon: modalStyles.closeButton,
        }}
        closeIcon={<span></span>}
      >
        <div style={modalStyles.modalContent}>
          <button
            className="absolute top-4 right-3 h-[44px] w-[44px] p-[10px] z-10"
            style={{ color: '#fff' }}
            onClick={onCloseVideo}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6"
                stroke="#969696"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 18L6 6"
                stroke="#969696"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <VideoPlayer ref={videoPlayerRef} />
        </div>
      </Modal>

      <div className="container lg:flex flex-col hidden mx-auto lg:px-14 px-5 mt-8">
        <div className="flex flex-col h-80 relative w-full mx-auto">
          <div className="">
            <img className="left-image animate-move" src={img2} alt="" loading="lazy" />
            <img
              className="left-image-two animate-move-two"
              src={img2}
              alt=""
              loading="lazy"
            />
            <img className="right-image animate-move-three" src={img2} loading="lazy" alt="" />
            <img
              className="right-image-two animate-move-four"
              src={img2}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="absolute flex items-center justify-center mt-3">
            <img className="Ellipse3" src={Ellipse3} loading="lazy" alt="Ellipse 3" />
          </div>
          <div className="absolute flex items-center justify-center mt-11">
            <img className="Ellipse2" src={Ellipse2} loading="lazy" alt="Ellipse 2" />
          </div>
          <div className="absolute flex items-center justify-center mt-20">
            <img className="Ellipse1" src={Ellipse1} loading="lazy" alt="Ellipse 1" />
          </div>
        </div>

        <div className="">
          <div className="relative bottom-32">
            <img className="image-over-One" src={img3} loading="lazy" alt="" />
            <img className="image-over-Two" src={img4} loading="lazy" alt="" />
          </div>
          <div className="body-images hidden lg:flex justify-center">
            <img src={img5} loading="lazy" alt="Hero Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
