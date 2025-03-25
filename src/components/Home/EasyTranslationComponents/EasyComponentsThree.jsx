import { Link, useNavigate } from "react-router-dom";
import img2 from "../../../../public/Images/easy/icon1.png";
import TranslationModal from "../../TranslationModal/TranslationModal";
import { useState } from "react";

const EasyComponentsThree = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  // Data to pass to the child component
  const easyTranslationData = {
    title: "Translation Memory",
    description: `The Translation Memory (TM) feature in Vashantor significantly enhances translation efficiency by storing previously translated content in a database. Whenever a similar sentence or phrase appears in future content, Vashantor automatically suggests the previously used translation, saving time and ensuring consistency. This system eliminates the need for translators to repeat the same work and guarantees that content is translated uniformly across all materials.
    Translation Memory is not just about reusing translations — it also ensures that your translations are contextually relevant. Vashantor’s TM takes into account the full context of the original content, reducing the risk of misinterpretation or inaccurate translations. As translators continue to add new translations, the system grows smarter, constantly improving its suggestions. The TM database is continuously updated, ensuring that all translations are stored centrally and can be accessed across all projects and languages. This helps maintain consistency in terminology, tone, and style across your entire project.
    Additionally, Vashantor’s TM reduces translation costs. Since the system reuses previously translated material, there is less need for new translations, lowering the overall expense of localization efforts. The result is a faster, more cost-effective process that ensures high-quality output.`,
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

export default EasyComponentsThree;
