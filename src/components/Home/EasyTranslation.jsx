import "./EasyTranslation.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import EasyComponentsOne from "./EasyTranslationComponents/EasyComponentsOne";
import EasyComponentsTwo from "./EasyTranslationComponents/EasyComponentsTwo";
import EasyComponentsThree from "./EasyTranslationComponents/EasyComponentsThree";
import EasyComponentsFour from "./EasyTranslationComponents/EasyComponentsFour";

// import image
import img from "../../../public/Images/easy/icon.png";

const EasyTranslation = () => {
  
  return (
    <section className="EasyTranslation">
      <div className="container px-5 py-5 pt-16 mx-auto lg:px-14 lg:py-14 lg:pt-28">
        <SectionTitle
          img={img}
          title="Easy Translation"
          textOne="Vashantor offers seamless and easy translations, ensuring that your content is accurately localized across"
          textTwo="multiple languages with minimal effort."
        />

        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <EasyComponentsOne />
          <EasyComponentsTwo />
          <EasyComponentsThree />
          <EasyComponentsFour />
        </div>
      </div>
    </section>
  );
};

export default EasyTranslation;
