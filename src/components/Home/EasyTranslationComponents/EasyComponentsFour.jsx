import { Link, useNavigate } from "react-router-dom";
import img2 from "../../../../public/Images/easy/icon1.png";
import TranslationModal from "../../TranslationModal/TranslationModal";
import { useState } from "react";

const EasyComponentsFour = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  // Data to pass to the child component
  const easyTranslationData = {
    title: "Customizable Workflows",
    description: `One of Vashantor's standout features is its ability to provide customizable workflows tailored to your specific needs. Localization projects vary widely in scope and complexity, so having the flexibility to define your workflow is essential. Vashantor allows you to design your own translation process, from content extraction to final approval and deployment. This means you can define every stage of the process, from initial translation to review and quality assurance, and assign specific roles to your team members at each stage.
    The platform also allows for automation of certain steps in the workflow. For example, you can set triggers to automatically assign tasks or notify team members when a certain phase is completed, ensuring that the process flows smoothly without unnecessary delays. Task delegation becomes effortless, with clear visibility into each team member's responsibilities and deadlines. Furthermore, the approval process is highly customizable. You can decide how many rounds of reviews or approvals are necessary before a translation is finalized, ensuring that the process fits your quality standards.
    With Vashantor, you have full control over the workflow, and it can be adapted for any type of project, whether small or large-scale. This flexibility allows you to streamline the process and ensure that every translation project meets your deadlines and quality expectations, no matter the size or complexity.

`,
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

export default EasyComponentsFour;
