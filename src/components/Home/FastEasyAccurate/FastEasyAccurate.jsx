import "./FastEasyAccurate.css";
import img from "../../../../public/Images/fasteasy/globe.svg";
import { useRef, useState } from "react";
import BookModal from "../../BookModal/BookModal";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

const FastEasyAccurate = () => {
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
    <section>
      <div className="container mx-auto lg:px-14 px-5 lg:py-14 lg:pb-32 py-5 lg:pt-28 pt-16">
        <div className="Fast-background-image relative lg:flex hidden">
          <div className="absolute top-[200px] left-[100px]">
            <p
              className="font-medium text-base leading-tight text-white uppercase"
              style={{ fontFamily: "Barlow" }}
            >
              Language translate and localize content?
            </p>
            <h3
              className="font-bold text-5xl leading-tight text-[#F0F0D3] mt-2"
              style={{ fontFamily: "Barlow" }}
            >
              Fast, Easy, & Accurate
            </h3>
            <p
              className="font-thin text-[18px] w-[472px] leading-7 text-[#F0F0D3] mt-2"
              style={{ fontFamily: "Barlow" }}
            >
              Hundreds of companies rely on Vashantor’s platform to accurately
              translate and localize content into any language and any media at
              scale.
            </p>
            <button className="book-button" onClick={onOpenModal}>
              Book A Meeting
            </button>
            <BookModal open={openModal} onClose={onCloseModal} />

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
                  style={{ color: "#fff" }}
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
            <button className="quick-button ml-4" onClick={handlePlayClick}>
              Quick Demo Video
            </button>
          </div>
          <div className="absolute top-[334px] right-[365px]">
            <img
              className="fast-section-image"
              src={img}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastEasyAccurate;
