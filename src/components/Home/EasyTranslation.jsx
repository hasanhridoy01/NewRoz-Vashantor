import "./EasyTranslation.css";
import img1 from "../../../public/Images/easy/icon.png";
import img2 from "../../../public/Images/easy/icon1.png";

const EasyTranslation = () => {
  return (
    <div className="EasyTranslation">
      <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="">
            <img src={img1} alt="" />
          </div>
          <div className="">
            <h4 className="easy-translation-text">Easy Translation</h4>
            <p className="easy-translation-text-two mt-3">
              Vashantor offers seamless and easy translations, ensuring that
              your content is accurately localized across
            </p>
            <p className="easy-translation-text-two">
              multiple languages with minimal effort.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-10 py-16">
          <div
            className="-rotate-3 rounded-lg"
            style={{ backgroundColor: "#F0F0D3" }}
          >
            <div className="easy-card rotate-3 cursor-pointer hover:bg-white p-5">
              <div className="flex items-center gap-3">
                <img src={img2} alt="" />
                <h4 className="easy-card-text">Multiplatform Support</h4>
              </div>
              <div className="mt-5">
                <p className="easy-card-text-two">
                  Supports multiple platforms and file formats for seamless
                  integration across multiple digital platforms.
                </p>
                <button
                  className="flex items-center gap-2 float-right mt-4"
                  style={{ color: "#969696" }}
                >
                  More
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 8 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.914062 1.70117L7.00049 7.7876L0.914062 13.874"
                      stroke="#969696"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className="-rotate-3 rounded-lg"
            style={{ backgroundColor: "#F0F0D3" }}
          >
            <div className="easy-card rotate-3 cursor-pointer hover:bg-white p-5">
              <div className="flex items-center gap-3">
                <img src={img2} alt="" />
                <h4 className="easy-card-text">Collaborative Workflow</h4>
              </div>
              <div className="mt-5">
                <p className="easy-card-text-two">
                  Enables multiple team members to work on translations
                  simultaneously, promoting efficient collaboration.
                </p>
                <button
                  className="flex items-center gap-2 float-right mt-4"
                  style={{ color: "#969696" }}
                >
                  More
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 8 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.914062 1.70117L7.00049 7.7876L0.914062 13.874"
                      stroke="#969696"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className="-rotate-3 rounded-lg"
            style={{ backgroundColor: "#F0F0D3" }}
          >
            <div className="easy-card rotate-3 cursor-pointer hover:bg-white p-5">
              <div className="flex items-center gap-3">
                <img src={img2} alt="" />
                <h4 className="easy-card-text">Translation Memory</h4>
              </div>
              <div className="mt-5">
                <p className="easy-card-text-two">
                  Utilizes a translation memory that stores previously
                  translated phrases & sentences to ensure accuracy.
                </p>
                <button
                  className="flex items-center gap-2 float-right mt-4"
                  style={{ color: "#969696" }}
                >
                  More
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 8 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.914062 1.70117L7.00049 7.7876L0.914062 13.874"
                      stroke="#969696"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className="-rotate-3 rounded-lg"
            style={{ backgroundColor: "#F0F0D3" }}
          >
            <div className="easy-card rotate-3 cursor-pointer hover:bg-white p-5">
              <div className="flex items-center gap-3">
                <img src={img2} alt="" />
                <h4 className="easy-card-text">Customizable Workflows</h4>
              </div>
              <div className="mt-5">
                <p className="easy-card-text-two">
                  Offers customizable workflow configurations to enhance
                  flexibility & control over the project lifecycle.
                </p>
                <button
                  className="flex items-center gap-2 float-right mt-4"
                  style={{ color: "#969696" }}
                >
                  More
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 8 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.914062 1.70117L7.00049 7.7876L0.914062 13.874"
                      stroke="#969696"
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
    </div>
  );
};

export default EasyTranslation;
