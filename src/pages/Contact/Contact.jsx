import React from "react";
import FastEasyAccurate from "../../components/Home/FastEasyAccurate/FastEasyAccurate";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Contact.css";

import img1 from "../../../public/Images/contact/Featured icon.png";
import img2 from "../../../public/Images/contact/Featured icon1.png";
import img3 from "../../../public/Images/contact/Featured icon2.png";

const Contact = () => {
  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);
  return (
    <div>
      <div className="" style={{ backgroundColor: "#f8f8e9", width: "100%" }}>
        <div className="contact-background-image container mx-auto lg:pb-14 py-5 lg:pt-64 pt-40 lg:px-14 px-5">
          <SectionTitle
            title="Contact Us"
            textOne="Feel free to reach out with any questions"
            textTwo=""
          />

          <p className="flex items-center justify-center mt-5 space-x-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 3.64575H7.5C4.5 3.64575 2.5 5.14575 2.5 8.64575V15.6458C2.5 19.1458 4.5 20.6458 7.5 20.6458H17.5C20.5 20.6458 22.5 19.1458 22.5 15.6458V8.64575C22.5 5.14575 20.5 3.64575 17.5 3.64575ZM17.97 9.73575L14.84 12.2358C14.18 12.7658 13.34 13.0258 12.5 13.0258C11.66 13.0258 10.81 12.7658 10.16 12.2358L7.03 9.73575C6.71 9.47575 6.66 8.99575 6.91 8.67575C7.17 8.35575 7.64 8.29575 7.96 8.55575L11.09 11.0558C11.85 11.6658 13.14 11.6658 13.9 11.0558L17.03 8.55575C17.35 8.29575 17.83 8.34575 18.08 8.67575C18.34 8.99575 18.29 9.47575 17.97 9.73575Z"
                fill="url(#paint0_linear_432_34824)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_432_34824"
                  x1="12.3522"
                  y1="3.64575"
                  x2="15.5267"
                  y2="27.392"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A9AC25" />
                  <stop offset="1" stop-color="#455507" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-bold text-[18px] text-[#424B1B]">
              support@vashantor.com
            </span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 gap-0 py-16 items-center justify-center">
            <div className="col-span-1 lg:mb-0 mb-16">
              <div className="grid grid-cols-1 grid-flow-row space-y-4">
                <div className="w-full h-[143px] rounded-[8px] py-6 gap-[5px] bg-white flex flex-col items-center justify-center">
                  <div className="">
                    <img src={img1} alt="" />
                  </div>
                  <div className="mt-1">
                    <p className="contact-text">Instagram</p>
                  </div>
                </div>

                <div className="w-full h-[143px] rounded-[8px] py-6 gap-[5px] bg-white flex flex-col items-center justify-center">
                  <div className="">
                    <img src={img2} alt="" />
                  </div>
                  <div className="mt-1">
                    <p className="contact-text">Facebook</p>
                  </div>
                </div>

                <div className="w-full h-[143px] rounded-[8px] py-6 gap-[5px] bg-white flex flex-col items-center justify-center">
                  <div className="">
                    <img src={img3} alt="" />
                  </div>
                  <div className="mt-1">
                    <p className="contact-text">X</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="w-full h-[453px] rounded-[8px] pt-4 bg-white flex flex-col items-center justify-center">
                <div className="w-full max-w-2xl py-6 gap-[5px] bg-white flex flex-col items-center lg:px-0 px-5">
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="email"
                      className="mb-2 text-sm font-medium text-gray-700"
                    >
                      Email:
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full flex flex-col mt-4">
                    <label
                      htmlFor="message"
                      className="mb-2 text-sm font-medium text-gray-700"
                    >
                      Message:
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="w-full flex justify-end mt-6">
                    <button className="contact-btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FastEasyAccurate />
      </div>
    </div>
  );
};

export default Contact;
