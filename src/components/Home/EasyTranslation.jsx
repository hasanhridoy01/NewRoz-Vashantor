import "./EasyTranslation.css";
import img1 from "../../../public/Images/easy/icon.png";

const EasyTranslation = () => {
  return (
    <>
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

        <div className="EasyTranslation grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-16">
          <div className="bg-gray-200 p-4">Item 1</div>
          <div className="bg-gray-200 p-4">Item 2</div>
          <div className="bg-gray-200 p-4">Item 3</div>
        </div>
      </div>
    </>
  );
};

export default EasyTranslation;
