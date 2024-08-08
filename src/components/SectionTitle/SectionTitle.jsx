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
        <h4 className="easy-translation-text">{title}</h4>
        <p className="easy-translation-text-two mt-3">{textOne}</p>
        <p className="easy-translation-text-two">{textTwo}</p>
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