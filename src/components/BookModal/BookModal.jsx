import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import logo from "../../../public/Images/logo/logo.png";
import PropTypes from "prop-types";
import "./BookModal.css";

const BookModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      closeIcon={<span></span>}
      styles={{
        modal: {
          borderRadius: "10px",
          padding: "0",
          overflow: "hidden",
          zIndex: "2000",
          width: "90%", // Adjust width for responsiveness
          maxWidth: "1100px", // Maximum width
          height: "auto", // Auto height
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.5)",
        },
        closeIcon: {
          color: "#000",
        },
        closeIconHover: {
          color: "#f00",
        },
      }}
    >
      <div className="w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="modal-left-side p-5 hidden lg:flex flex-col items-center bg-[#f0f0d3]">
            <img
              className="h-[40px] w-[229px] mb-2 mt-10"
              src={logo}
              alt="Logo"
            />
            <p className="text-center text-sm font-medium text-[#555555]">
              Translation has never been this easy.
            </p>
            <p className="text-center text-sm font-medium text-[#555555]">
              Get started by booking a meeting. It’s FREE!
            </p>
          </div>
          <div className="bg-[#f8f8e9] p-5 md:p-10 relative">
            <button
              className="absolute top-2 right-2 h-[44px] w-[44px] p-[10px] bg-[#F0F0D3] rounded-full"
              onClick={onClose}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6"
                  stroke="#969696"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 18L6 6"
                  stroke="#969696"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="mt-10 md:mt-7">
              <h4 className="font-bold text-2xl md:text-4xl text-[#222222]">
                Book A Meeting
              </h4>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                    style={{ fontFamily: "Poppins", color: "#222222" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 bg-[#F0F0D3] rounded-md"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "#969696",
                    }}
                    placeholder="Full Name"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium"
                    style={{ fontFamily: "Poppins", color: "#222222" }}
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    className="mt-1 block w-full px-3 py-2.5 bg-[#F0F0D3] rounded-md"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "#969696",
                    }}
                  >
                    <option value="" disabled selected>
                      Select country
                    </option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="gb">United Kingdom</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                    style={{ fontFamily: "Poppins", color: "#222222" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 bg-[#F0F0D3] rounded-md"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "#969696",
                    }}
                    placeholder="Enter Number"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                    style={{ fontFamily: "Poppins", color: "#222222" }}
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 bg-[#F0F0D3] rounded-md"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "#969696",
                    }}
                    placeholder="Enter Email Address"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium"
                    style={{ fontFamily: "Poppins", color: "#222222" }}
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="mt-1 block w-full px-3 py-2 bg-[#F0F0D3] rounded-md"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "#969696",
                    }}
                    placeholder="Select time"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium"
                    style={{ fontFamily: "Poppins", color: "#222222" }}
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="mt-1 block w-full px-3 py-2 bg-[#F0F0D3] rounded-md"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "#969696",
                    }}
                  />
                </div>

                <div className="mb-3 col-span-1 md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                    style={{ fontFamily: "Poppins", color: "#222222" }}
                  >
                    Meeting Topic
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="mt-1 block w-full px-3 py-2 bg-[#F0F0D3] rounded-md"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "#969696",
                    }}
                    placeholder="Write Here"
                  ></textarea>
                </div>

                <div className="flex justify-start md:col-span-2">
                  <button className="px-6 py-2 bg-[#687535] text-white font-semibold rounded-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

BookModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BookModal;
