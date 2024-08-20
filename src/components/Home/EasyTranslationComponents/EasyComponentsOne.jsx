import { useNavigate } from "react-router-dom";
import img2 from "../../../../public/Images/easy/icon1.png";

const EasyComponentsOne = () => {
  const navigate = useNavigate();

  // Data to pass to the child component
  const easyTranslationData = {
    title: "Multiplatform Support",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sint maxime ullam dolores cum, atque laborum adipisci doloribus at odio libero provident harum earum eaque quae architecto ex. Deserunt ex placeat dolorem optio eligendi nostrum culpa quisquam iure quaerat ea, impedit, id illo maxime, laborum ducimus. Sequi porro earum pariatur consequuntur laborum magnam ex labore maiores ipsam perspiciatis eaque sed officia, assumenda impedit at error itaque consequatur. In, tempora dolorum. Adipisci reprehenderit repellat harum eos cupiditate veniam unde impedit voluptate rerum quia. Facere, quo dolor? Consequuntur eius vero provident at omnis, libero reprehenderit? Eos provident nulla laborum sit necessitatibus sunt aut. Error sint corrupti modi illum exercitationem excepturi itaque expedita placeat nam, consectetur dolor sequi id illo optio cupiditate sit nulla aperiam vel nemo hic fugiat iusto ullam animi natus. Ducimus illo amet repudiandae expedita quo delectus consequatur sunt, nisi quia assumenda quibusdam quae veniam facere dolore quisquam accusamus repellat praesentium vero at recusandae reprehenderit? Nisi, numquam. Vel ullam odio, provident blanditiis temporibus, id autem quidem laborum tempore nesciunt illo voluptatum saepe debitis soluta dolore et commodi aliquid iure recusandae porro eius. Quis, suscipit voluptatibus recusandae libero, illum quibusdam assumenda voluptates dicta eum nulla iusto delectus voluptas tenetur quas quaerat possimus laboriosam velit laudantium facere debitis officia dolor. Alias, debitis amet odio repudiandae dolorem, repellat dolores nulla sit hic ab, quidem maiores quam accusamus placeat! Ullam dolorum maiores vel voluptatibus odio error molestiae similique optio quasi eaque deserunt quas, quaerat corrupti velit aut dolor iste ipsa aperiam architecto omnis. Fugit rerum non quidem voluptate obcaecati natus, atque, iste, commodi aperiam necessitatibus tenetur inventore molestiae repudiandae sint! Nobis molestiae non sint fugit ipsam voluptates, cumque sit dolorem pariatur ipsa? Vero, cum saepe magnam sed quidem veritatis. Alias accusamus voluptas quod molestias aspernatur est aliquam, exercitationem aut quibusdam a similique itaque nihil!`,
    image: img2,
  };

  const handleNavigation = () => {
    navigate("/easyTranslation", { state: easyTranslationData });
  };

  return (
    <div>
      <div className="-rotate-3 rounded-lg w-full h-auto cursor-pointer bg-[#F0F0D3] hover:bg-[#f8f8e9] transition-all duration-300">
        <div className="easy-card lg:h-[250px] h-[280px] rotate-3 hover:bg-white p-5 transition-all duration-300">
          <div className="flex items-center gap-3">
            <img src={img2} alt="" loading="lazy" />
            <h4 className="easy-card-text">Multiplatform Support</h4>
          </div>
          <div className="mt-5">
            <p className="easy-card-text-two">
              Supports multiple platforms and file formats for seamless
              integration across multiple digital platforms.
            </p>
            <button
              onClick={handleNavigation}
              className="flex items-center gap-2 float-right lg:mt-4 mt-0"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyComponentsOne;
