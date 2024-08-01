import React from "react";
import FastEasyAccurate from "../../components/Home/FastEasyAccurate/FastEasyAccurate";
import Plan from "../../components/Home/Plan/Plan";

const Pricing = () => {
  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);
  return (
    <div>
      <div className="" style={{ backgroundColor: "#f8f8e9", width: "100%" }}>
        <div className="lg:pt-24 pt-28">
          <Plan />
        </div>
        <FastEasyAccurate />
      </div>
    </div>
  );
};

export default Pricing;
