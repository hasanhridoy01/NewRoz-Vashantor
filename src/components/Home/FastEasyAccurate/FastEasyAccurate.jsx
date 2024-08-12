import "./FastEasyAccurate.css";
import img from '../../../../public/Images/fasteasy/globe.svg'
import { useState } from "react";
import BookModal from "../../BookModal/BookModal";

const FastEasyAccurate = () => {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return (
    <div>
      <div className="container mx-auto lg:px-14 px-5 lg:py-14 lg:pb-32 py-5 lg:pt-28 pt-16">
        <div className="Fast-background-image relative lg:flex hidden">
          <div className="absolute top-[200px] left-[100px]">
            <p className="font-medium text-base leading-tight text-white uppercase" style={{ fontFamily: 'Barlow' }}>
              Language translate and localize content?
            </p>
            <h3 className="font-bold text-5xl leading-tight text-[#F0F0D3] mt-2" style={{ fontFamily: 'Barlow' }}>
              Fast, Easy, & Accurate
            </h3>
            <p className="font-thin text-[18px] w-[472px] leading-7 text-[#F0F0D3] mt-2" style={{ fontFamily: 'Barlow' }}>
              Hundreds of companies rely on Vashantor’s platform to accurately
              translate and localize content into any language and any media at
              scale.
            </p>
            <button className="book-button" onClick={onOpenModal}>Book A Meeting</button>
            <BookModal open={openModal} onClose={onCloseModal} />
            <button className="quick-button ml-4">Quick Demo Video</button>
          </div>
          <div className="absolute top-[334px] right-[365px]">
            <img className="fast-section-image" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastEasyAccurate;
