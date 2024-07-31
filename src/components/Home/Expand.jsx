import img from "../../../public/Images/expand/expandreach.png";
import ExpandCarousel from "./ExpandCarousel";

const Expand = () => {
  return (
    <div
      className=""
      style={{
        background: "linear-gradient(90deg, #F0F0D3 0%, #D0D0B3 100%)",
        width: "100%",
      }}
    >
      <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-16 items-center">
          <div className="">
            <ExpandCarousel />
          </div>
          <div className="flex">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expand;
