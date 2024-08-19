import React, { useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import img from "../../../public/Images/language/page/icon.png";
import FastEasyAccurate from "../../components/Home/FastEasyAccurate/FastEasyAccurate";

const countries = [
  { id: 1, language: "Pashto, Dari" }, // Afghanistan
  { id: 2, language: "Albanian" }, // Albania
  { id: 3, language: "Arabic" }, // Algeria
  { id: 4, language: "Catalan" }, // Andorra
  { id: 5, language: "Portuguese" }, // Angola
  { id: 6, language: "English" }, // Antigua and Barbuda
  { id: 7, language: "Spanish" }, // Argentina
  { id: 8, language: "Armenian" }, // Armenia
  { id: 9, language: "English" }, // Australia
  { id: 10, language: "German" }, // Austria
  { id: 11, language: "Azerbaijani" }, // Azerbaijan
  { id: 12, language: "English" }, // Bahamas
  { id: 13, language: "Arabic" }, // Bahrain
  { id: 14, language: "Bengali" }, // Bangladesh
  { id: 15, language: "English" }, // Barbados
  { id: 16, language: "Belarusian, Russian" }, // Belarus
  { id: 17, language: "Dutch" }, // Belgium
  { id: 18, language: "Spanish" }, // Belize
  { id: 19, language: "French" }, // Benin
  { id: 20, language: "Dzongkha" }, // Bhutan
  { id: 21, language: "Spanish" }, // Bolivia
  { id: 22, language: "Bosnian, Croatian, Serbian" }, // Bosnia and Herzegovina
  { id: 23, language: "English, Setswana" }, // Botswana
  { id: 24, language: "Portuguese" }, // Brazil
  { id: 25, language: "Malay" }, // Brunei
  { id: 26, language: "Bulgarian" }, // Bulgaria
  { id: 27, language: "French" }, // Burkina Faso
  { id: 28, language: "Kirundi" }, // Burundi
  { id: 29, language: "Portuguese" }, // Cabo Verde
  { id: 30, language: "Khmer" }, // Cambodia
  { id: 31, language: "French, English" }, // Cameroon
  { id: 32, language: "English, French" }, // Canada
  { id: 33, language: "French" }, // Central African Republic
  { id: 34, language: "French" }, // Chad
  { id: 35, language: "Spanish" }, // Chile
  { id: 36, language: "Chinese (Mandarin)" }, // China
  { id: 37, language: "Spanish" }, // Colombia
  { id: 38, language: "Comorian" }, // Comoros
  { id: 39, language: "French" }, // Congo, Democratic Republic of the
  { id: 40, language: "French" }, // Congo, Republic of the
  { id: 41, language: "Spanish" }, // Costa Rica
  { id: 42, language: "Croatian" }, // Croatia
  { id: 43, language: "Spanish" }, // Cuba
  { id: 44, language: "Greek" }, // Cyprus
  { id: 45, language: "Czech" }, // Czech Republic
  { id: 46, language: "Danish" }, // Denmark
  { id: 47, language: "Arabic" }, // Djibouti
  { id: 48, language: "English" }, // Dominica
  { id: 49, language: "Spanish" }, // Dominican Republic
  { id: 50, language: "Spanish" }, // Ecuador
];

const Language = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f8f8e9] w-full">
      <Helmet>
        <title>Vashantor | Language Page</title>
      </Helmet>
      <div className="container mx-auto lg:pb-14 py-5 lg:pt-64 pt-40 lg:px-14 px-5">
        <SectionTitle
          img={img}
          title="124 Language Support around the world"
          textOne="Find your desired language to provide more convenience and grow more business."
          textTwo=""
        />
        <div className="mt-5">
          <div className="relative mt-10 mx-auto bg-[#ffffff] rounded-md w-full max-w-[441px] h-[68px] lg:h-[68px] lg:w-[441px]">
            <input
              type="text"
              className="pl-10 pr-4 py-2 w-full h-full border-2 border-[#9B9D40] bg-transparent rounded-md focus:outline-none"
              style={{
                fontFamily: "Barlow",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "19px",
                color: "#222222",
              }}
              placeholder="Search language"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#969696]"
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
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((item) => (
                    <div
                      key={item.id}
                      className="py-2 px-4 bg-white cursor-pointer"
                    >
                      <p
                        style={{
                          fontFamily: "Barlow",
                          fontSize: "18px",
                          lineHeight: "30px",
                          color: "#424A21",
                        }}
                      >
                        {item.language}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center col-span-full py-4 text-[#424A21]">
                    No languages found.
                  </p>
                )}
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
