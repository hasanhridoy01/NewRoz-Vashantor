import React from "react";
import FastEasyAccurate from "../../components/Home/FastEasyAccurate/FastEasyAccurate";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import EasyComponentsTwo from "../../components/Home/EasyTranslationComponents/EasyComponentsTwo";
import EasyComponentsOne from "../../components/Home/EasyTranslationComponents/EasyComponentsOne";
import EasyComponentsThree from "../../components/Home/EasyTranslationComponents/EasyComponentsThree";
import EasyComponentsFour from "../../components/Home/EasyTranslationComponents/EasyComponentsFour";

const Service = () => {
  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);
  return (
    <div>
      <div className="" style={{ backgroundColor: "#f8f8e9", width: "100%" }}>
        <div className="container mx-auto lg:pb-14 py-5 lg:pt-64 pt-40 lg:px-14 px-5">
          <SectionTitle
            title="Service"
            textOne="Vashantor offers seamless and easy translations, ensuring that your content is accurately localized across"
            textTwo="multiple languages with minimal effort."
          />
          <div className="grid grid-cols-1 gap-20 py-16 items-center">
            <EasyComponentsOne />
            <EasyComponentsTwo />
            <EasyComponentsThree />
            <EasyComponentsFour />
          </div>
        </div>
        <FastEasyAccurate />
      </div>
    </div>
  );
};

export default Service;
