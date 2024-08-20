import React from "react";
import "./FooterDetails.css";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FastEasyAccurate from "../../components/Home/FastEasyAccurate/FastEasyAccurate";
import { useLocation } from "react-router-dom";

const FooterDetails = () => {
  // Get the passed data using the useLocation hook
  const location = useLocation();
  const { title, description } = location.state || {};

  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);
  return (
    <section className="bg-[#F8F8E9] w-full">
      <Helmet>
        <title>Vashantor | Language Page</title>
      </Helmet>
      <div className="container mx-auto lg:pb-14 py-5 lg:pt-64 pt-40 lg:px-14 px-5">
        <SectionTitle
          title="124 Language Support around the world"
          textOne="Find your desired language to provide more convenience and grow more business."
          textTwo=""
        />
        <div className="grid grid-cols-1 gap-5 lg:mt-20 mt-10 lg:mb-7 mb-5">
          <div className="easy-card h-full w-full bg-white p-5">
            <div className="flex items-center gap-3">
              <h4 className="easy-card-text">{title}</h4>
            </div>
            <div className="mt-5">
              <p className="easy-card-text-two justify-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <FastEasyAccurate />
    </section>
  );
};

export default FooterDetails;
