import SectionTitle from "../../SectionTitle/SectionTitle";
import "./Plan.css";
import img1 from "../../../../public/Images/plan/Featured icon.png";
import img2 from "../../../../public/Images/plan/Featured icon1.png";
import img3 from "../../../../public/Images/plan/Featured icon2.png";

const Plan = () => {
  return (
    <div className="plan-background-image">
      <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
        <SectionTitle
          title="Plans for all"
          textOne="Simple, transparent pricing that grows with you."
          textTwo=" Try any plan free for 30 days."
        />
        <div className="flex items-center justify-center mt-5 mb-5 relative w-[408px] mx-auto">
          <button className="w-[208px] h-[51px] rounded-l-[10px] rounded-r-[0px] p-2 bg-[#687535] text-[#FFFFFF] text-center z-10">
            Monthly
          </button>
          <button className="w-[200px] h-[51px] rounded-r-[10px] rounded-l-[0] border border-[#687535] bg-white text-[#424B1B]">
            Annual (save 20%)
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 items-center justify-center gap-5">
          <div className="w-[100%] h-[635px] rounded-lg border-1 bg-[#FFFFFF] border-[#F0F0D3] shadow-[#0000000F]">
            <div className="flex flex-col items-center justify-center pt-10 pb-0">
              <div className="">
                <img src={img1} alt="" />
              </div>
              <div className="mt-5">
                <h5 className="font-barlow font-semibold text-2xl leading-[30px] text-center text-[#687535]">
                  Basic plan
                </h5>
                <h1 className="font-barlow font-bold text-5xl leading-[57px] text-center mt-2">
                  $10/mth
                </h1>
                <h4 className="font-barlow font-bold text-[18px] leading-[30px] text-center mt-3 text-[#555555]">
                  Billed annually.
                </h4>
              </div>

              <div className="w-full px-12 py-4">
                <h4 className="flex items-center gap-5 text-left mt-7 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Access to all basic features
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Basic reporting and analytics
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Up to 10 individual users
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  20GB individual data each user
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Basic chat and email support
                </h4>
              </div>

              <div className="bg-[#FAFAFA] h-[107px] w-full mt-7 rounded-b-lg flex items-center justify-center">
                <button className="h-[43px] w-[314px] rounded-lg border-2 px-[20px] py-[12px] border-[#424B1B] shadow-[#1018280D] flex items-center justify-center">
                  Get started
                </button>
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[638px] rounded-lg border-2 bg-[#FFFFFF] border-[#687535] shadow-[#0000000F]">
            <div className="flex flex-col items-center justify-center pt-10 pb-0">
              <div className="">
                <img src={img2} alt="" />
              </div>
              <div className="mt-5">
                <h5 className="font-barlow font-semibold text-2xl leading-[30px] text-center text-[#687535]">
                  Business plan
                </h5>
                <h1 className="font-barlow font-bold text-5xl leading-[57px] text-center mt-2">
                  $20/mth
                </h1>
                <h4 className="font-barlow font-bold text-[18px] leading-[30px] text-center mt-3 text-[#555555]">
                  Billed annually.
                </h4>
              </div>

              <div className="w-full px-12 py-4">
                <h4 className="flex items-center gap-5 text-left mt-7 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  200+ integrations
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Advanced reporting & analytics
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Up to 20 individual users
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  40GB individual data each user
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Priority chat and email support
                </h4>
              </div>

              <div className="bg-[#FAFAFA] h-[107px] w-full mt-5 rounded-b-lg flex items-center justify-center">
                <button className="h-[43px] w-[314px] rounded-lg border-2 px-[20px] py-[12px] border-[#424B1B] shadow-[#1018280D] flex items-center justify-center bg-[#687535] text-[#fff]">
                  Get started
                </button>
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[635px] rounded-lg border-1 bg-[#FFFFFF] border-[#F0F0D3] shadow-[#0000000F]">
            <div className="flex flex-col items-center justify-center pt-10 pb-0">
              <div className="">
                <img src={img3} alt="" />
              </div>
              <div className="mt-5">
                <h5 className="font-barlow font-semibold text-2xl leading-[30px] text-center text-[#687535]">
                  Enterprise plan
                </h5>
                <h1 className="font-barlow font-bold text-5xl leading-[57px] text-center mt-2">
                  $40/mth
                </h1>
                <h4 className="font-barlow font-bold text-[18px] leading-[30px] text-center mt-3 text-[#555555]">
                  Billed annually.
                </h4>
              </div>

              <div className="w-full px-12 py-4">
                <h4 className="flex items-center gap-5 text-left mt-7 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Advanced custom fields
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Audit log and data history
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Unlimited individual users
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Unlimited individual data
                </h4>
                <h4 className="flex items-center gap-5 text-left mt-4 text-[18px] font-semibold text-[#555555]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.629883"
                      width="24"
                      height="24"
                      rx="12"
                      fill="#F8F8E9"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.096 8.01955L9.93602 14.9296L8.03602 12.8996C7.68602 12.5696 7.13602 12.5496 6.73602 12.8296C6.34602 13.1196 6.23602 13.6296 6.47602 14.0396L8.72602 17.6996C8.94602 18.0396 9.32601 18.2496 9.75601 18.2496C10.166 18.2496 10.556 18.0396 10.776 17.6996C11.136 17.2296 18.006 9.03955 18.006 9.03955C18.906 8.11955 17.816 7.30955 17.096 8.00955V8.01955Z"
                      fill="#424B1B"
                    />
                  </svg>{" "}
                  Personalised+priotity service
                </h4>
              </div>

              <div className="bg-[#FAFAFA] h-[107px] w-full mt-7 rounded-b-lg flex items-center justify-center">
                <button className="h-[43px] w-[314px] rounded-lg border-2 px-[20px] py-[12px] border-[#424B1B] shadow-[#1018280D] flex items-center justify-center">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
