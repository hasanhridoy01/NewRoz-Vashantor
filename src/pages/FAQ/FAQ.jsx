import React, { useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FastEasyAccurate from "../../components/Home/FastEasyAccurate/FastEasyAccurate";
import "./FAQ.css";

const FAQ = () => {
  // Page top position adjustment
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);

  // State for managing which question is open
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  // State for managing the search input
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle toggling the FAQ answers
  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  // Array of FAQ questions and answers
  const faqData = [
    {
      question: "How do I know if a product is available in boutiques?",
      answer:
        "You can check the availability of products in boutiques by visiting the product page. Look for the 'Check availability in boutiques' option and select your location.",
    },
    {
      question: "What is the return policy?",
      answer:
        "You can return any items within 30 days of purchase. The items must be unused, with original tags, and in their original packaging. Refunds are processed within 7-10 business days.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order in the 'My Orders' section of your account. If you’re not registered, you can still track your order using your email and order number in the 'Track Order' section.",
    },
    {
      question: "Can I change my delivery address after placing an order?",
      answer:
        "Unfortunately, once an order has been placed, the delivery address cannot be changed. Please ensure the correct address is entered when placing your order.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team via the 'Contact Us' section on our website. You can also reach us by phone or email, which are listed in the same section.",
    },
  ];

  // Filter the FAQ data based on the search query
  const filteredFaqData = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-[#F8F8E9] w-full">
      <Helmet>
        <title>Vashantor | FAQ Page</title>
      </Helmet>
      <div className="container mx-auto lg:pb-14 py-5 lg:pt-64 pt-40 lg:px-14 px-5">
        <SectionTitle
          title="We're here to answer all your questions."
          textOne="If you’re new to Genie or looking to supercharge your current stack, this section will help you learn more about the platform and its features."
          textTwo=""
        />
        <div className="mt-5 lg:mb-7 mb-5">
          {/* FAQ Section */}
          <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
              FAQ's
            </h1>

            <div className="lg:mt-12 bg-[#F0F0D3] dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 w-full mx-auto rounded-md">
              <div className="flex justify-between md:flex-row flex-col">
                <div className="md:mb-0 mb-8 md:text-left text-center">
                  <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
                    Questions
                  </h2>
                  <p className="font-normal dark:text-gray-300 lg:text-[15px] text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
                    If you don’t find your answer, Please contact us or Leave a
                    Message, we’ll be more than happy to assist you.
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full rounded-md">
                    <input
                      className="focus:outline-none bg-white"
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg1.svg"
                      alt="search"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mx-auto">
              {/* Display filtered questions */}
              {filteredFaqData.length > 0 ? (
                filteredFaqData.map((item, index) => (
                  <div key={index}>
                    <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
                    <div className="w-full px-4 md:px-6" onClick={() => toggleQuestion(index)}>
                      <div
                        id="mainHeading"
                        className="flex justify-between items-center w-full cursor-pointer"
                      >
                        <div className="flex-1">
                          <p className="flex items-center text-gray-800 dark:text-white font-medium text-sm md:text-lg leading-6">
                            <span className="mr-4 text-lg font-semibold lg:text-xl md:text-lg">
                              Q{index + 1}.
                            </span>
                            {item.question}
                          </p>
                        </div>
                        <button
                          aria-label="toggler"
                          className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-transform duration-300 bg-[#F0F0D3] text-[#f1f1e9] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#687535]"
                          onClick={() => toggleQuestion(index)}
                        >
                          <img
                            className={`w-4 h-4 transform ${
                              openQuestionIndex === index ? "rotate-180" : ""
                            }`}
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                            alt="toggler"
                          />
                        </button>
                      </div>

                      <div
                        id="menu"
                        className={`mt-4 ${
                          openQuestionIndex === index ? "" : "hidden"
                        }`}
                      >
                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg leading-6">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center lg:text-[20px] text-[18px] text-gray-600 dark:text-gray-300 mt-10">
                  No matching questions found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <FastEasyAccurate />
    </section>
  );
};

export default FAQ;
