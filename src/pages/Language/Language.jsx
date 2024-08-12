import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import img from "../../../public/Images/language/page/icon.png";
import FastEasyAccurate from "../../components/Home/FastEasyAccurate/FastEasyAccurate";

const countries = [
  { id: 1, name: "Afghanistan" },
  { id: 2, name: "Albania" },
  { id: 3, name: "Algeria" },
  { id: 4, name: "Andorra" },
  { id: 5, name: "Angola" },
  { id: 6, name: "Antigua and Barbuda" },
  { id: 7, name: "Argentina" },
  { id: 8, name: "Armenia" },
  { id: 9, name: "Australia" },
  { id: 10, name: "Austria" },
  { id: 11, name: "Azerbaijan" },
  { id: 12, name: "Bahamas" },
  { id: 13, name: "Bahrain" },
  { id: 14, name: "Bangladesh" },
  { id: 15, name: "Barbados" },
  { id: 16, name: "Belarus" },
  { id: 17, name: "Belgium" },
  { id: 18, name: "Belize" },
  { id: 19, name: "Benin" },
  { id: 20, name: "Bhutan" },
  { id: 21, name: "Bolivia" },
  { id: 22, name: "Bosnia and Herzegovina" },
  { id: 23, name: "Botswana" },
  { id: 24, name: "Brazil" },
  { id: 25, name: "Brunei" },
  { id: 26, name: "Bulgaria" },
  { id: 27, name: "Burkina Faso" },
  { id: 28, name: "Burundi" },
  { id: 29, name: "Cabo Verde" },
  { id: 30, name: "Cambodia" },
  { id: 31, name: "Cameroon" },
  { id: 32, name: "Canada" },
  { id: 33, name: "Central African Republic" },
  { id: 34, name: "Chad" },
  { id: 35, name: "Chile" },
  { id: 36, name: "China" },
  { id: 37, name: "Colombia" },
  { id: 38, name: "Comoros" },
  { id: 39, name: "Congo, Democratic Republic of the" },
  { id: 40, name: "Congo, Republic of the" },
  { id: 41, name: "Costa Rica" },
  { id: 42, name: "Croatia" },
  { id: 43, name: "Cuba" },
  { id: 44, name: "Cyprus" },
  { id: 45, name: "Czech Republic" },
  { id: 46, name: "Denmark" },
  { id: 47, name: "Djibouti" },
  { id: 48, name: "Dominica" },
  { id: 49, name: "Dominican Republic" },
  { id: 50, name: "Ecuador" },
];

const Language = () => {
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);

  return (
    <div className="bg-[#f8f8e9] w-full">
      <Helmet>
        <title>Vashantor | Language Page</title>
      </Helmet>
      <div className="container mx-auto lg:pb-14 py-5 lg:pt-64 pt-40 lg:px-14 px-5">
        <SectionTitle
          img={img}
          title="124 Language Support around the world"
          textOne="Find your desired language to provide more convenient and grow more business."
          textTwo=""
        />
        <div className="mt-5">
          <div className="relative mt-10 mx-auto bg-[#FFFFE9] rounded-md w-full max-w-[441px] h-[44px] lg:h-[44px] lg:w-[441px]">
            <input
              type="text"
              className="pl-10 pr-4 py-2 w-full h-full border-none bg-transparent rounded-md focus:outline-none"
              style={{
                fontFamily: "Barlow",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#969696",
              }}
              placeholder="Search language"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#969696]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
            >
              <path
                d="M9.74967 18.1458C14.1219 18.1458 17.6663 14.6014 17.6663 10.2292C17.6663 5.85691 14.1219 2.3125 9.74967 2.3125C5.37742 2.3125 1.83301 5.85691 1.83301 10.2292C1.83301 14.6014 5.37742 18.1458 9.74967 18.1458Z"
                stroke="#969696"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.4997 18.9792L16.833 17.3125"
                stroke="#969696"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-7">
            <div className="overflow-x-auto bg-[#FFFFE9] h-full w-full border-[2.4px] border-[#f0f0d3]">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-[2.4px] bg-[#f0f0d3]">
                {countries.map((item) => (
                  <div key={item.id} className="py-2 px-4 bg-white">
                    <p
                      style={{
                        fontFamily: "Barlow",
                        fontSize: "18px",
                        lineHeight: "30px",
                        color: "#424A21",
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FastEasyAccurate />
    </div>
  );
};

export default Language;
