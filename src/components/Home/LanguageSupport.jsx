import SectionTitle from "../SectionTitle/SectionTitle";
import "./LanguageSupport.css";
import img1 from "../../../public/Images/language/Tooltip.png";
import img2 from "../../../public/Images/language/Tooltip1.png";
import img3 from "../../../public/Images/language/Tooltip2.png";
import img4 from "../../../public/Images/language/Tooltip3.png";
import img5 from "../../../public/Images/language/Tooltip4.png";

const LanguageSupport = () => {
  return (
    <div>
      <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
        <SectionTitle
          title="124 Language Support around the world"
          textOne="Find your desired language to provide more convenient"
          textTwo=" and grow more business."
        />
        <div className="language-backGround lg:h-[645px] h-[187px] relative">
          <img
            className="imgOne absolute lg:top-[362px] top-[88px] lg:left-[468px] left-[108px] lg:h-[91px] h-[45px] lg:w-[126px] w-[61px]"
            src={img1}
            alt=""
          />
          <img
            className="imgTwo absolute lg:top-[151px] top-[26px] lg:left-[295px] left-[52px] lg:h-[91px] h-[45px] lg:w-[126px] w-[61px] rounded-[6px]"
            src={img2}
            alt=""
          />
          <img
            className="imgThree absolute lg:top-[198px] top-[42px] lg:left-[770px] left-[185px] lg:h-[91px] h-[45px] lg:w-[126px] w-[61px]"
            src={img3}
            alt=""
          />
          <img
            className="imgFour absolute lg:top-[232px] top-[49px] lg:left-[966px] left-[249px] lg:h-[91px] h-[45px] lg:w-[126px] w-[61px]"
            src={img4}
            alt=""
          />
          <img
            className="imgFive absolute lg:top-[141px] top-[26px] lg:left-[1205px] left-[313px] lg:h-[91px] h-[45px] lg:w-[126px] w-[61px]"
            src={img5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageSupport;
