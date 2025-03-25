import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TranslationModal from "../../TranslationModal/TranslationModal";
import img2 from "../../../../public/Images/easy/icon1.png";

const EasyComponentsOne = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  // Data to pass to the child component
  const easyTranslationData = {
    title: "Multiplatform Support",
    description: `Vashantor provides robust multiplatform support to ensure that your localization process is seamless, no matter what type of digital product you're working with. Whether it’s a website, mobile application, or desktop software, Vashantor integrates effortlessly into a wide range of platforms. This includes support for major content management systems (CMS) like WordPress, Joomla, and Shopify, as well as web frameworks such as React, Angular, and Vue.js. Additionally, Vashantor ensures smooth localization for mobile apps, both for iOS and Android, as well as for desktop applications running on Windows, macOS, or Linux.
    The platform's integration with these various environments allows for automatic translation updates, so when new content is added or updated in the application, the system can automatically synchronize and reflect these changes in all languages. This helps keep your translations consistent across every platform without manual intervention. Furthermore, Vashantor provides an API for custom integrations, enabling you to pull or push translations into any system or platform. With this cross-platform flexibility, your translations will be kept up to date in real time, ensuring that all versions of your product are consistent and accurately localized.`,
    image: img2,
  };

  return (
    <div>
      <div className="-rotate-3 rounded-lg w-full h-auto cursor-pointer bg-[#F0F0D3] hover:bg-[#f8f8e9] transition-all duration-300">
        <div className="easy-card lg:h-[250px] h-[250px] rotate-3 hover:bg-white p-5 transition-all duration-300">
          <div className="flex items-center gap-3">
            <img
              src={easyTranslationData.image}
              alt="Multiplatform Support"
              loading="lazy"
            />
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

            {/* Modal */}
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

export default EasyComponentsOne;
