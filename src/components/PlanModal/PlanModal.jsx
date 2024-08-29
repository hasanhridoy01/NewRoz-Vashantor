import { Modal } from "react-responsive-modal";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import "./PlanModal.css";

const PlanModal = ({ open, onClose, modalText }) => {
  const handleBooking = async () => {
    try {
      // Simulate a booking process, e.g., API call
      const response = await fakeBookingApiCall();

      if (response.success) {
        Swal.fire({
          title: "Success!",
          text: "Thank you for subscribing to our vashantor(language translation service). Your request has been received and is being processed. We will notify you via email once your subscription is active. If we need any further information, our team will contact you directly. We appreciate your trust in our service.",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup",
            title: "custom-swal-title",
            content: "custom-swal-text",
          },
        });
        onClose();
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup",
        },
      });
    }
  };

  const fakeBookingApiCall = () => {
    // Simulate a successful or failed booking API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 100);
    });
  };

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
          <div className="bg-[#f8f8e9] p-5 md:p-10 relative">
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
            <div className="mt-10 md:mt-7">
              <h4 className="font-bold text-2xl md:text-4xl text-[#222222]">
                {modalText}
              </h4>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-2 gap-2">
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                    style={{ fontFamily: "Poppins", color: "#222222" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 bg-[#ffffff] rounded-md focus:outline-none"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "#222222",
                    }}
                    placeholder="Enter Number"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                    style={{ fontFamily: "Poppins", color: "#222222" }}
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 bg-[#ffffff] rounded-md focus:outline-none"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "#222222",
                    }}
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="mb-3 col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                    style={{ fontFamily: "Poppins", color: "#222222" }}
                  >
                    Meeting Topic
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="mt-1 block w-full px-3 py-2 bg-[#ffffff] rounded-md focus:outline-none"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "#222222",
                    }}
                    placeholder="Write Here"
                  ></textarea>
                </div>

                <div className="flex justify-start lg:col-span-2 col-span-1">
                  <button
                    className="px-6 py-2 bg-[#687535] text-white font-semibold rounded-lg"
                    onClick={handleBooking}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

PlanModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  modalText: PropTypes.string.modalText,
};

export default PlanModal;
