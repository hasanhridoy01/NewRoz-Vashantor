import SectionTitle from "../SectionTitle/SectionTitle";
import "./KeyFeature.css";
import img1 from "../../../public/Images/key/icon.png";
import img2 from "../../../public/Images/key/icon1.png";
import img3 from "../../../public/Images/key/icon2.png";
import img4 from "../../../public/Images/key/icon3.png";
import img5 from "../../../public/Images/key/icon4.png";
import img6 from "../../../public/Images/key/icon5.png";

import logo from "../../../public/Images/key/logo/icon.png";

const KeyFeature = () => {
  return (
    <div className="key-feature">
      <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
        <SectionTitle
          img={logo}
          title="Key Features"
          textOne="Vashantor has some unique key features for your localization"
          textTwo="which is very effective and secured."
        />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 items-center">
          <div className="key-feature-col-one">
            <div className="flex flex-col items-center justify-center">
              <img src={img1} alt="" />
              <h5 className="key-title">Multi-Format File Upload</h5>
              <p className="key-title-one">
                Supports multiple file formats for
              </p>
              <p className="key-title-two">seamless integration.</p>
            </div>
          </div>

          <div className="key-feature-col-two">
            <div className="flex flex-col items-center justify-center">
              <img src={img2} alt="" />
              <h5 className="key-title">String Management</h5>
              <p className="key-title-one">
                Easily add new strings to existing files
              </p>
              <p className="key-title-two">to keep your content up-to-date.</p>
            </div>
          </div>

          <div className="key-feature-col-three">
            <div className="flex flex-col items-center justify-center">
              <img src={img3} alt="" />
              <h5 className="key-title">Automated Translation</h5>
              <p className="key-title-one">Leverages machine translation to</p>
              <p className="key-title-two">
                provide quick initial translations.
              </p>
            </div>
          </div>

          <div className="key-feature-col-four">
            <div className="flex flex-col items-center justify-center">
              <img src={img4} alt="" />
              <h5 className="key-title">Add Comment</h5>
              <p className="key-title-one">A system of adding comments of</p>
              <p className="key-title-two">collaborators on individual keys.</p>
            </div>
          </div>

          <div className="key-feature-col-five">
            <div className="flex flex-col items-center justify-center">
              <img src={img5} alt="" />
              <h5 className="key-title">Version Control</h5>
              <p className="key-title-one">
                Keeps track of changes & updates to{" "}
              </p>
              <p className="key-title-two">translations, easy rollback and</p>
              <p className="key-title-two">management</p>
            </div>
          </div>

          <div className="key-feature-col-six">
            <div className="flex flex-col items-center justify-center">
              <img src={img6} alt="" />
              <h5 className="key-title">Secure Data Management</h5>
              <p className="key-title-one">
                Ensures that all data is securely stored
              </p>
              <p className="key-title-two">& managed, protecting sensitive</p>
              <p className="key-title-two">information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;
