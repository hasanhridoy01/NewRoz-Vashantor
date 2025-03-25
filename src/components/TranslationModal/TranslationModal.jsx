import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PropTypes from "prop-types";

const TranslationModal = ({ open, onClose, easyTranslationData = {} }) => {
  const { title = "", description = "", image = "" } = easyTranslationData || {};

  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      closeIcon={<span></span>}
      blockScroll={true}
      closeOnOverlayClick={false}
      styles={{
        modal: {
          borderRadius: "10px",
          padding: "0",
          overflow: "hidden",
          zIndex: "2000",
          width: "90%",
          maxWidth: "700px",
          height: "auto",
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.5)",
        },
        closeIcon: {
          color: "#000",
        },
        closeIconHover: {
          color: "#f00",
        },
      }}
    >
      <div className="w-full h-full">
        <div className="grid grid-cols-1 gap-0">
          <div className="relative p-5 md:p-10">
            <button
              className="absolute top-2 right-2 h-[44px] w-[44px] p-[10px] bg-[#F0F0D3] rounded-full"
              onClick={onClose}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6"
                  stroke="#969696"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 18L6 6"
                  stroke="#969696"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <img src={image} alt={title} loading="lazy" />
              <h4 className="easy-card-text">{title}</h4>
            </div>
            <div className="mt-5">
              <p className="easy-card-text-two">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

TranslationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  easyTranslationData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default TranslationModal;
