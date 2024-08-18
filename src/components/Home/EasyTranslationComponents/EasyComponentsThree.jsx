import img2 from "../../../../public/Images/easy/icon1.png";

const EasyComponentsThree = () => {
    return (
        <div>
            <div
            className="-rotate-3 rounded-lg w-full h-auto"
            style={{ backgroundColor: "#F0F0D3" }}
          >
            <div className="easy-card rotate-3 lg:h-[250px] h-[280px] cursor-pointer hover:bg-white p-5">
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
        </div>
    );
};

export default EasyComponentsThree;