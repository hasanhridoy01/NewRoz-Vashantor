import React from "react";
import "./FooterDetails.css";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FastEasyAccurate from "../../components/Home/FastEasyAccurate/FastEasyAccurate";
import { useLocation } from "react-router-dom";

const FooterDetails = () => {
  // Get the passed data using the useLocation hook
  const location = useLocation();
  const { title, description } = location.state || {};

  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);
  return (
    <section className="bg-[#F8F8E9] w-full">
      <Helmet>
        <title>Vashantor | Language Page</title>
      </Helmet>
      <div className="container mx-auto lg:pb-14 py-5 lg:pt-64 pt-40 lg:px-14 px-5">
        <SectionTitle
          title="124 Language Support around the world"
          textOne="Find your desired language to provide more convenience and grow more business."
          textTwo=""
        />
        <div className="grid grid-cols-1 gap-5 lg:mt-20 mt-10 lg:mb-7 mb-5">
          <div className="easy-card h-full w-full bg-white p-5">
            <div className="flex items-center gap-3">
              <h4 className="easy-card-text">{title}</h4>
            </div>
            <div className="mt-5">
              <p className="easy-card-text-two justify-center">{description}, Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad autem laborum provident, earum voluptate nostrum? Nobis sed ratione sint unde quisquam aliquam vitae quasi eius et. Cupiditate corrupti delectus laudantium, totam quidem mollitia optio enim quis fugit architecto esse dolores repudiandae sed itaque tempore placeat voluptates ducimus ipsum exercitationem ut quas dignissimos. Maiores repellat saepe possimus reiciendis similique vero ratione? Illum reprehenderit similique facere perferendis? Adipisci sint temporibus pariatur obcaecati maxime itaque numquam repellat? Quis, ut maxime. Fuga odit quia maxime ullam neque dolores harum eum nisi quod optio unde, nam eligendi ex ipsa debitis, provident tenetur. Fuga, rem.</p>
            </div>
          </div>
        </div>
      </div>
      <FastEasyAccurate />
    </section>
  );
};

export default FooterDetails;
