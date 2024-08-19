import img2 from "../../../../public/Images/easy/icon1.png";

const EasyComponentsFour = () => {
  return (
    <div>
      <div className="-rotate-3 rounded-lg w-full h-auto cursor-pointer bg-[#F0F0D3] hover:bg-[#f8f8e9]">
        <div className="easy-card rotate-3 lg:h-[250px] h-[280px] cursor-pointer hover:bg-white p-5">
          <div className="flex items-center gap-3">
            <img src={img2} alt="" />
            <h4 className="easy-card-text">Customizable Workflows</h4>
          </div>
          <div className="mt-5">
            <p className="easy-card-text-two">
              Offers customizable workflow configurations to enhance flexibility
              & control over the project lifecycle.
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

export default EasyComponentsFour;
