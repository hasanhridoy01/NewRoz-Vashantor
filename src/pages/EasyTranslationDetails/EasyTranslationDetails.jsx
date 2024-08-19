import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./EasyTranslationDetails.css";

const EasyTranslationDetails = () => {
  // Get the passed data using the useLocation hook
  const location = useLocation();
  const { title, description, image } = location.state || {};

  // Scroll to the top of the page
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);

  return (
    <section className="bg-[#f8f8e9] w-full">
      <Helmet>
        <title>Vashantor | Easy Translation Page</title>
      </Helmet>
      <div className="container mx-auto lg:pb-14 py-5 lg:pt-64 pt-40 lg:px-14 px-5">
        <SectionTitle
          title="Easy Translation For All Language!"
          textOne="Find your desired language to provide more convenience and grow more business."
          textTwo=""
        />
        <div className="grid grid-cols-1 gap-5 lg:mt-20 mt-10 lg:mb-10 mb-5">
          <div className="easy-card h-full w-full bg-white p-5">
            <div className="flex items-center gap-3">
              <img src={image} alt={title} loading="lazy" />
              <h4 className="easy-card-text">{title}</h4>
            </div>
            <div className="mt-5">
              <p className="easy-card-text-two justify-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyTranslationDetails;
