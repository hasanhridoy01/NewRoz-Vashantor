import "./Footer.css";
import logo from "../../../public/Images/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Data for each section
  const data = {
    "Why Vashantor?": {
      title: "Why Vashantor?",
      description: `Description for "Why Vashantor?"`,
    },
    "Vashantor features": {
      title: "Vashantor features",
      description: `Description for "Vashantor features"`,
    },
    "Book a meeting": {
      title: "Book a meeting",
      description: `Description for "Book a meeting"`,
    },
    "Request a demo": {
      title: "Request a demo",
      description: `Description for "Request a demo"`,
    },
    "Price plans": {
      title: "Price plans",
      description: `Description for "Price plans"`,
    },
    "Help center": {
      title: "Help center",
      description: `Description for "Help center"`,
    },
    "Status": {
      title: "Status",
      description: `Description for "Status"`,
    },
    "Privacy Policy": {
      title: "Privacy Policy",
      description: `Description for "Privacy Policy"`,
    },
    "Terms of Service": {
      title: "Status",
      description: `Description for "Terms of Service"`,
    },
    "Security": {
      title: "Security",
      description: `Description for "Security"`,
    },
  };

  // Handle navigation with specific data
  const handleNavigation = (section) => {
    navigate(`/footerDetails/${section}`, { state: data[section] });
  };
  return (
    <footer>
      <div
        className="footer-background-image"
        style={{
          //   background: `linear-gradient(
          //   to right,
          //   rgba(241, 241, 212, 1),
          //   rgba(241, 241, 214, 1),
          //   rgba(249, 249, 223, 1)
          // )`,
          backgroundColor: "#F0F0D3",
        }}
      >
        <div className="container mx-auto px-5 lg:px-14 py-5 lg:py-14 pt-16 lg:pt-20 relative background-shadow-image">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-5 py-12">
            <div className="col-span-3 space-y-5">
              <div className="">
                <img src={logo} alt="Vashantor Logo" />
              </div>
              <div>
                <p
                  className="font-medium text-sm leading-6 text-gray-600 w-[90%]"
                  style={{ fontFamily: "Poppins" }}
                >
                  Vashantor is an advanced localization system designed to
                  effortlessly transform your website or application language.
                  Our platform offers seamless integration and robust
                  translation management.
                </p>
              </div>
            </div>

            {/* Spacing divs */}
            <div className="col-span-2 space-y-5">
              <h5
                className="text-lg font-medium leading-8 text-[#424A21]"
                style={{ fontFamily: "Barlow" }}
              >
                Vashantor
              </h5>
              <div className="space-y-2">
                <h6
                  className="footer-text"
                  onClick={() => handleNavigation("Why Vashantor?")}
                >
                  Why Vashantor?
                </h6>
                <h6
                  className="footer-text"
                  onClick={() => handleNavigation("Vashantor features")}
                >
                  Vashantor features
                </h6>
                <h6
                  className="footer-text"
                  onClick={() => handleNavigation("Book a meeting")}
                >
                  Book a meeting
                </h6>
                <h6
                  className="footer-text"
                  onClick={() => handleNavigation("Request a demo")}
                >
                  Request a demo
                </h6>
                <h6
                  className="footer-text"
                  onClick={() => handleNavigation("Price plans")}
                >
                  Price plans
                </h6>
              </div>
            </div>

            <div className="col-span-2 space-y-5">
              <h5
                className="text-lg font-medium leading-8 text-[#424A21]"
                style={{ fontFamily: "Barlow" }}
              >
                Support
              </h5>
              <div className="space-y-2">
                <h6 className="footer-text" onClick={() => handleNavigation("Help center")}>Help center</h6>
                <h6 className="footer-text" onClick={() => handleNavigation("Status")}>Status</h6>
                <h6 className="footer-text">
                  <Link to={"FAQ"}>FAQ</Link>
                </h6>
              </div>
            </div>

            <div className="col-span-2 space-y-5">
              <h5 className="font-barlow text-lg font-medium leading-8 text-[#424A21]">
                Legal
              </h5>
              <div className="space-y-2">
                <h6 className="footer-text" onClick={() => handleNavigation("Privacy Policy")}>Privacy Policy</h6>
                <h6 className="footer-text" onClick={() => handleNavigation("Terms of Service")}>Terms of Service</h6>
                <h6 className="footer-text" onClick={() => handleNavigation("Security")}>Security</h6>
              </div>
            </div>

            <div className="col-span-3 space-y-5">
              <h5
                className="text-lg font-medium leading-8 text-[#424A21]"
                style={{ fontFamily: "Barlow" }}
              >
                Contact Us
              </h5>
              <div className="space-y-2">
                <h6 className="footer-text lg:w-[50%] w-[90%]">
                  For any suggestions, queries or complaints please contact us
                  at:
                </h6>
                <h6 className="footer-text flex items-center gap-2">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 4.12988H7C4 4.12988 2 5.62988 2 9.12988V16.1299C2 19.6299 4 21.1299 7 21.1299H17C20 21.1299 22 19.6299 22 16.1299V9.12988C22 5.62988 20 4.12988 17 4.12988ZM17.47 10.2199L14.34 12.7199C13.68 13.2499 12.84 13.5099 12 13.5099C11.16 13.5099 10.31 13.2499 9.66 12.7199L6.53 10.2199C6.21 9.95988 6.16 9.47988 6.41 9.15988C6.67 8.83988 7.14 8.77988 7.46 9.03988L10.59 11.5399C11.35 12.1499 12.64 12.1499 13.4 11.5399L16.53 9.03988C16.85 8.77988 17.33 8.82988 17.58 9.15988C17.84 9.47988 17.79 9.95988 17.47 10.2199Z"
                      fill="#687535"
                    />
                  </svg>
                  <span
                    className="font-medium text-base leading-6 text-[#555555]"
                    style={{ fontFamily: "Poppins" }}
                  >
                    support@vashantor.com
                  </span>
                </h6>
                <div>
                  <p
                    className="font-medium text-sm leading-6 text-[#555555]"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Follow us on:
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <button>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.3 23.4883C20.8 23.4883 23 21.2883 23 15.7883V9.18828C23 3.68828 20.8 1.48828 15.3 1.48828H8.7C3.2 1.48828 1 3.68828 1 9.18828V15.7883C1 21.2883 3.2 23.4883 8.7 23.4883H15.3ZM12 16.1299C13.933 16.1299 15.5 14.5629 15.5 12.6299C15.5 10.6969 13.933 9.12988 12 9.12988C10.067 9.12988 8.5 10.6969 8.5 12.6299C8.5 14.5629 10.067 16.1299 12 16.1299ZM17.6361 6.62988C17.0838 6.62988 16.6361 7.0776 16.6361 7.62988C16.6361 8.18217 17.0838 8.62988 17.6361 8.62988H17.6477C18.2 8.62988 18.6477 8.18217 18.6477 7.62988C18.6477 7.0776 18.2 6.62988 17.6477 6.62988H17.6361Z"
                          fill="#687535"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14 23.4883H15.3C20.8 23.4883 23 21.2883 23 15.7883V9.18828C23 3.68828 20.8 1.48828 15.3 1.48828H8.7C3.2 1.48828 1 3.68828 1 9.18828V15.7883C1 21.2883 3.2 23.4883 8.7 23.4883H11V15.4299H9.3C9.1 15.4299 9 15.3299 9 15.1299V13.2299C9 13.0299 9.1 12.9299 9.3 12.9299H11V9.62988C11 7.92988 12.3 6.62988 14 6.62988H16.7C16.9 6.62988 17 6.72988 17 6.92988V9.32988C17 9.52988 16.9 9.62988 16.7 9.62988H14.3C14.1 9.62988 14 9.72988 14 9.92988V12.8299H16.6C16.8 12.8299 16.9 13.0299 16.9 13.2299L16.5 15.1299C16.5 15.2299 16.3 15.3299 16.2 15.3299H14V23.4883Z"
                          fill="#687535"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3 23.4883H8.7C3.2 23.4883 1 21.2883 1 15.7883V9.18828C1 3.68828 3.2 1.48828 8.7 1.48828H15.3C20.8 1.48828 23 3.68828 23 9.18828V15.7883C23 21.2883 20.8 23.4883 15.3 23.4883Z"
                          fill="#687535"
                        />
                        <path
                          d="M11.1408 13.0444L6.37131 18.4876L11.1408 13.0444ZM16.7362 6.48897L12.4951 11.4837L16.7362 6.48897ZM6 6.48828L15.408 18.4883H18L8.59234 6.48828H6Z"
                          fill="#F0F0D3"
                        />
                        <path
                          d="M11.1408 13.0444L6.37131 18.4876M16.7362 6.48897L12.4951 11.4837M6 6.48828L15.408 18.4883H18L8.59234 6.48828H6Z"
                          stroke="#F0F0D3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 lg:w-[1413px] w-[90%] bottom-0 border-t-2 border-[#D7D78D] lg:h-[41px] transform -translate-x-1/2 flex lg:items-center lg:flex-row flex-col items-center lg:justify-between justify-center lg:gap-0 gap-1">
            <p
              className="text-left lg:mt-0 mt-1"
              style={{
                fontFamily: "Barlow",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "16px",
                color: "#555555",
              }}
            >
              © 2024 and All Rights Reserved Vashantor.
            </p>
            <p
              className="text-right"
              style={{
                fontFamily: "Barlow",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "16px",
                color: "#555555",
              }}
            >
              Powered by Newroz Technologies LTD.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
