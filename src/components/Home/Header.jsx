import "./Header.css";
import logo from "../../../public/Images/logo/logo.png";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };

  //added active page color effect.............!
  const isHomePage = location.pathname.includes("/home");
  const isServicePage = location.pathname.includes("service");
  const isPricingPage = location.pathname.includes("pricing");
  const isContactPage = location.pathname.includes("contact");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#f0f0d3] p-5 h-[79px] flex items-center justify-center fixed top-0 left-0 right-0 z-[1000] w-full">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-end-section">
          <nav className="header-nav">
            <Link to="/home">
              <a
                href="#"
                className={`nav-link ${isHomePage ? "nav-link-active" : ""}`}
              >
                Home
              </a>
            </Link>
            <Link to={"/service"}>
              <a
                href="#"
                className={`nav-link ${isServicePage ? "nav-link-active" : ""}`}
              >
                Service
              </a>
            </Link>
            <Link to={"/pricing"}>
              <a
                href="#"
                className={`nav-link ${isPricingPage ? "nav-link-active" : ""}`}
              >
                Pricing
              </a>
            </Link>
            <Link to={"/contact"}>
              <a
                href="#"
                className={`nav-link ${isContactPage ? "nav-link-active" : ""}`}
              >
                Contact
              </a>
            </Link>
          </nav>

          <div className="button-section">
            <div className="dropdown-container">
              <button className="dropdown-button" onClick={toggleDropdown}>
                English
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.32495L6.5 6.82495L12 1.32495"
                    stroke="#424B1B"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="dropdown-menu">
                  <a href="#option1" className="dropdown-item">
                    English
                  </a>
                  <a href="#option2" className="dropdown-item">
                    Arabic
                  </a>
                  <a href="#option3" className="dropdown-item">
                    Kurdish
                  </a>
                </div>
              )}
            </div>

            <button className="talk-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.97 18.405C21.97 18.765 21.89 19.135 21.72 19.495C21.55 19.855 21.33 20.195 21.04 20.515C20.55 21.055 20.01 21.445 19.4 21.695C18.8 21.945 18.15 22.075 17.45 22.075C16.43 22.075 15.34 21.835 14.19 21.345C13.04 20.855 11.89 20.195 10.75 19.365C9.6 18.525 8.51 17.595 7.47 16.565C6.44 15.525 5.51 14.435 4.68 13.295C3.86 12.155 3.2 11.015 2.72 9.88495C2.24 8.74495 2 7.65495 2 6.61495C2 5.93495 2.12 5.28495 2.36 4.68495C2.6 4.07495 2.98 3.51495 3.51 3.01495C4.15 2.38495 4.85 2.07495 5.59 2.07495C5.87 2.07495 6.15 2.13495 6.4 2.25495C6.66 2.37495 6.89 2.55495 7.07 2.81495L9.39 6.08495C9.57 6.33495 9.7 6.56495 9.79 6.78495C9.88 6.99495 9.93 7.20495 9.93 7.39495C9.93 7.63495 9.86 7.87495 9.72 8.10495C9.59 8.33495 9.4 8.57495 9.16 8.81495L8.4 9.60495C8.29 9.71495 8.24 9.84495 8.24 10.005C8.24 10.085 8.25 10.155 8.27 10.235C8.3 10.315 8.33 10.375 8.35 10.435C8.53 10.765 8.84 11.195 9.28 11.715C9.73 12.235 10.21 12.765 10.73 13.295C11.27 13.825 11.79 14.315 12.32 14.765C12.84 15.205 13.27 15.505 13.61 15.685C13.66 15.705 13.72 15.735 13.79 15.765C13.87 15.795 13.95 15.805 14.04 15.805C14.21 15.805 14.34 15.745 14.45 15.635L15.21 14.885C15.46 14.635 15.7 14.445 15.93 14.325C16.16 14.185 16.39 14.115 16.64 14.115C16.83 14.115 17.03 14.155 17.25 14.245C17.47 14.335 17.7 14.465 17.95 14.635L21.26 16.985C21.52 17.165 21.7 17.375 21.81 17.625C21.91 17.875 21.97 18.125 21.97 18.405Z"
                  stroke="#424B1B"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.5 9.07495C18.5 8.47495 18.03 7.55495 17.33 6.80495C16.69 6.11495 15.84 5.57495 15 5.57495"
                  stroke="#424B1B"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 9.07495C22 5.20495 18.87 2.07495 15 2.07495"
                  stroke="#424B1B"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Let's Talk
            </button>
          </div>

          {/* collapse-button */}
          <button
            className="collapse-button md:hidden p-2"
            onClick={toggleDrawer}
          >
            <svg
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.57105C0 4.15277 3.58172 0.571045 8 0.571045H36C40.4183 0.571045 44 4.15277 44 8.57105V36.571C44 40.9893 40.4183 44.571 36 44.571H8C3.58172 44.571 0 40.9893 0 36.571V8.57105Z"
                fill="#FFFFE9"
              />
              <path
                d="M13 18.571H31"
                stroke="#687535"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19 26.571L31 26.571"
                stroke="#687535"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* user-button */}
          <button className="user-button lg:ml-2 ml-1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12.075C14.7614 12.075 17 9.83638 17 7.07495C17 4.31353 14.7614 2.07495 12 2.07495C9.23858 2.07495 7 4.31353 7 7.07495C7 9.83638 9.23858 12.075 12 12.075Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5901 22.075C20.5901 18.205 16.7402 15.075 12.0002 15.075C7.26015 15.075 3.41016 18.205 3.41016 22.075"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <Drawer
        open={isOpenDrawer}
        onClose={toggleDrawer}
        direction="top"
        className="!bg-[#101400F5] !bg-opacity-50 !h-screen !w-full !p-3"
      >
        <div className="relative h-full p-3">
          <div className="flex items-center justify-between">
            <div className="dropdown-container">
              <button
                className="dropdown-button-small"
                onClick={toggleDropdown}
              >
                English
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.32495L6.5 6.82495L12 1.32495"
                    stroke="#424B1B"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="dropdown-menu">
                  <a href="#option1" className="dropdown-item">
                    English
                  </a>
                  <a href="#option2" className="dropdown-item">
                    Arabic
                  </a>
                  <a href="#option3" className="dropdown-item">
                    Kurdish
                  </a>
                </div>
              )}
            </div>

            <button className="talk-button-small">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.97 18.405C21.97 18.765 21.89 19.135 21.72 19.495C21.55 19.855 21.33 20.195 21.04 20.515C20.55 21.055 20.01 21.445 19.4 21.695C18.8 21.945 18.15 22.075 17.45 22.075C16.43 22.075 15.34 21.835 14.19 21.345C13.04 20.855 11.89 20.195 10.75 19.365C9.6 18.525 8.51 17.595 7.47 16.565C6.44 15.525 5.51 14.435 4.68 13.295C3.86 12.155 3.2 11.015 2.72 9.88495C2.24 8.74495 2 7.65495 2 6.61495C2 5.93495 2.12 5.28495 2.36 4.68495C2.6 4.07495 2.98 3.51495 3.51 3.01495C4.15 2.38495 4.85 2.07495 5.59 2.07495C5.87 2.07495 6.15 2.13495 6.4 2.25495C6.66 2.37495 6.89 2.55495 7.07 2.81495L9.39 6.08495C9.57 6.33495 9.7 6.56495 9.79 6.78495C9.88 6.99495 9.93 7.20495 9.93 7.39495C9.93 7.63495 9.86 7.87495 9.72 8.10495C9.59 8.33495 9.4 8.57495 9.16 8.81495L8.4 9.60495C8.29 9.71495 8.24 9.84495 8.24 10.005C8.24 10.085 8.25 10.155 8.27 10.235C8.3 10.315 8.33 10.375 8.35 10.435C8.53 10.765 8.84 11.195 9.28 11.715C9.73 12.235 10.21 12.765 10.73 13.295C11.27 13.825 11.79 14.315 12.32 14.765C12.84 15.205 13.27 15.505 13.61 15.685C13.66 15.705 13.72 15.735 13.79 15.765C13.87 15.795 13.95 15.805 14.04 15.805C14.21 15.805 14.34 15.745 14.45 15.635L15.21 14.885C15.46 14.635 15.7 14.445 15.93 14.325C16.16 14.185 16.39 14.115 16.64 14.115C16.83 14.115 17.03 14.155 17.25 14.245C17.47 14.335 17.7 14.465 17.95 14.635L21.26 16.985C21.52 17.165 21.7 17.375 21.81 17.625C21.91 17.875 21.97 18.125 21.97 18.405Z"
                  stroke="#424B1B"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.5 9.07495C18.5 8.47495 18.03 7.55495 17.33 6.80495C16.69 6.11495 15.84 5.57495 15 5.57495"
                  stroke="#424B1B"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 9.07495C22 5.20495 18.87 2.07495 15 2.07495"
                  stroke="#424B1B"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Let's Talk
            </button>
          </div>
          <div className="flex h-96 flex-col gap-3 items-center justify-center">
            <div className="">
              <Link to="/home">
                <a
                  href="#"
                  className={`nav-link-small ${
                    isHomePage ? "nav-link-small-active" : ""
                  }`}
                >
                  Home
                </a>
              </Link>
            </div>
            <div className="">
              <Link to={"/service"}>
                <a
                  href="#"
                  className={`nav-link-small ${
                    isServicePage ? "nav-link-small-active" : ""
                  }`}
                >
                  Service
                </a>
              </Link>
            </div>
            <div className="">
              <Link to={"/pricing"}>
                <a
                  href="#"
                  className={`nav-link-small ${
                    isPricingPage ? "nav-link-small-active" : ""
                  }`}
                >
                  Pricing
                </a>
              </Link>
            </div>
            <div className="">
              <Link to={"/contact"}>
                <a
                  href="#"
                  className={`nav-link-small ${
                    isContactPage ? "nav-link-small-active" : ""
                  }`}
                >
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <button
              onClick={toggleDrawer}
              className="text-white text-2xl underline"
              style={{
                fontFamily: "Barlow",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "19px",
                height: "44px",
                width: "44px",
                padding: "10px",
                gap: "10px",
                backgroundColor: "#424B1B",
                borderRadius: "50%",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18.5039L18 6.50391"
                  stroke="#687535"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 18.5039L6 6.50391"
                  stroke="#687535"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
