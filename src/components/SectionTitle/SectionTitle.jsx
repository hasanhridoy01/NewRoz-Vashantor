import PropTypes from "prop-types";
import img1 from "../../../public/Images/easy/icon.png";
import "./SectionTitle.css";

const SectionTitle = ({ img, title, textOne, textTwo }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>
        <img className="section-title-image" src={img || img1} alt="Icon" />
      </div>
      <div>
        <h4 className="easy-translation-text lg:text-[56px] text-[32px] lg:leading-[67px] leading-[38px]">{title}</h4>
        <p className="easy-translation-text-two mt-3 lg:text-[18px] text-[16px] lg:leading-[30px] leading-[30px]">{textOne}</p>
        <p className="easy-translation-text-two lg:text-[18px] text-[16px] lg:leading-[30px] leading-[30px]">{textTwo}</p>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  img: PropTypes.string, // Add this line
  title: PropTypes.string.isRequired,
  textOne: PropTypes.string.isRequired,
  textTwo: PropTypes.string.isRequired,
};

export default SectionTitle;