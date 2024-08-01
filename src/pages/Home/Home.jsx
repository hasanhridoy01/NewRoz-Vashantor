import React from "react";
import EasyTranslation from "../../components/Home/EasyTranslation";
import Expand from "../../components/Home/Expand";
import FastEasyAccurate from "../../components/Home/FastEasyAccurate/FastEasyAccurate";
import KeyFeature from "../../components/Home/KeyFeature";
import LanguageSupport from "../../components/Home/LanguageSupport";
import Plan from "../../components/Home/Plan/Plan";
import TaskManagement from "../../components/Home/TaskManagement";
import TechnicalSupport from "../../components/Home/TechnicalSupport";
import Testimonial from "../../components/Home/Testimonial";
import "./Home.css";

const Home = () => {
  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);
  return (
    <>
      <div className="" style={{ backgroundColor: "#f8f8e9", width: "100%" }}>
        <EasyTranslation />
        <TaskManagement />
        <KeyFeature />
        <Expand />
        <LanguageSupport />
        <TechnicalSupport />
        <Plan />
        <Testimonial />
        <FastEasyAccurate />
      </div>
    </>
  );
};

export default Home;
