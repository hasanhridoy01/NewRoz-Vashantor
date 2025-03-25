import { Link, useNavigate } from "react-router-dom";
import img2 from "../../../../public/Images/easy/icon1.png";
import TranslationModal from "../../TranslationModal/TranslationModal";
import { useState } from "react";

const EasyComponentsTwo = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const easyTranslationData = {
    title: "Collaborative Workflow",
    description: `Vashantor excels in fostering a collaborative workflow that streamlines the translation process. This feature allows teams to work together seamlessly, whether it's translators, project managers, or developers, all collaborating in real-time. Vashantor enables multiple team members to work simultaneously on translation tasks, ensuring efficient use of time and reducing bottlenecks. The platform provides a role-based access control system, meaning you can assign specific permissions to different team members, such as translators, editors, proofreaders, and developers. This helps ensure that everyone has the right level of access to the content they need without compromising the integrity of the project.
    The platform also includes tools for commenting and feedback, allowing team members to leave notes or suggestions directly on the translation segments. This eliminates the need for endless email chains and ensures all feedback is stored in one place, keeping communication clear and organized. Additionally, Vashantor includes a built-in review cycle, where completed translations can be sent for approval before being finalized, guaranteeing that each translation meets the highest quality standards. Automated notifications keep everyone informed on the progress of tasks and provide real-time updates, which helps the team stay aligned and move the project forward smoothly.`,
    image: img2,
  };

  const handleNavigation = () => {
    navigate("/easyTranslation", { state: easyTranslationData });
  };
  return (
    <div>
      <div className="-rotate-3 rounded-lg w-full h-auto cursor-pointer bg-[#F0F0D3] hover:bg-[#f8f8e9] transition-all duration-300">
        <div className="easy-card rotate-3 lg:h-[250px] h-[250px] cursor-pointer hover:bg-white p-5 transition-all duration-300">
          <div className="flex items-center gap-3">
            <img src={easyTranslationData.image} alt="" loading="lazy" />
            <h4 className="easy-card-text">{easyTranslationData.title}</h4>
          </div>
          <div className="mt-5">
            <p className="easy-card-text-two">
              {easyTranslationData.description.slice(0, 90)}...
            </p>
            <button
              onClick={onOpenModal}
              className="flex items-center float-right gap-2 mt-2 lg:mt-4"
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
            {/* modal */}
            <TranslationModal
              open={openModal}
              onClose={onCloseModal}
              easyTranslationData={easyTranslationData || {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyComponentsTwo;
