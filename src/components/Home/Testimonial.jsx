import SectionTitle from "../SectionTitle/SectionTitle";
import "./Testimonial.css";
import TestimonialCarousel from "./TestimonialCarousel";
import logo from "../../../public/Images/testimonial/icon.png";

const Testimonial = () => {
  return (
    <div className="">
      <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
        <SectionTitle
          img={logo}
          title="Testimonial"
          textOne="Check out the comments of our happy customers."
          textTwo=" "
        />
        <div className="flex items-center justify-center mt-16">
          <div className="testimonial-background-image lg:h-[650px] h-[310px] lg:w-[1019px] w-full flex lg:items-center justify-center">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
