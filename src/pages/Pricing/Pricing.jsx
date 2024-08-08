import React from "react";
import FastEasyAccurate from "../../components/Home/FastEasyAccurate/FastEasyAccurate";
import Plan from "../../components/Home/Plan/Plan";
import { Helmet } from "react-helmet";

const Pricing = () => {
  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Vashantor | Pricing Page</title>
      </Helmet>
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
