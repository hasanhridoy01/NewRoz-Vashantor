import "./Hero.css";
import img1 from "../../../public/Images/hero/body.png";

const Hero = () => {
  return (
    <div className="hero">
      <h2 className="hero-title">Fast, Easy, & Accurate</h2>
      <h3 className="hero-title-two">online translation portal</h3>
      <h5 className="hero-paragraph">
        Hundreds of companies rely on Vashantor’s platform to accurately
        translate and localize content
      </h5>
      <h5 className="hero-paragraph-two">
        into any language and any media at scale.
      </h5>
      <div className="button-parent">
        <button className="book-button">Book A Meeting</button>
        <button className="quick-button">Quick Demo Video</button>
      </div>
      
      <div className="body-images hidden lg:flex">
        <img src={img1} alt="Hero Illustration" />
      </div>
    </div>
  );
};

export default Hero;
