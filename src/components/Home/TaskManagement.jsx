import img1 from "../../../public/Images/task/icon.png";
import img2 from "../../../public/Images/task/Invite team member.png";
import img3 from "../../../public/Images/task/Comments.png";
import "./TaskManagement.css";

const TaskManagement = () => {
  return (
    <section className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-10 py-16 items-center">
        <div className="p-2 task-left">
          <div className="flex lg:items-start items-center lg:justify-start justify-center">
            <img src={img1} alt="" loading="lazy" />
          </div>
          <div className="mt-4">
            <h2 className="task-title lg:text-left text-center lg:text-[56px] text-[32px] lg:leading-[67px] leading-[38px]">
              Tasks management with Team Contribution
            </h2>
            <div className="lg:pr-36 pr-0">
              <p className="task-title-two mt-4 lg:text-left text-center">
                The most powerful localize language software that build team to
                manage your project.
              </p>
              <p className="task-title-two lg:text-left text-center">
                Track Assign task and role to your desired person. Communication
                and manage member with smooth experience.
              </p>
            </div>

            <div className="mt-5 flex lg:flex-row flex-col items-center justify-left lg:gap-3 gap-0">
              <div className="flex items-center justify-center gap-5">
                <button className="btn-one">
                  <svg
                    width="9"
                    height="31"
                    viewBox="0 0 9 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 29.6338H1V1.63379H8"
                      stroke="#D7D78D"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Add people or group
                  <svg
                    width="9"
                    height="31"
                    viewBox="0 0 9 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 29.6338H8V1.63379H1"
                      stroke="#D7D78D"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="btn-two">
                  <svg
                    width="9"
                    height="31"
                    viewBox="0 0 9 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 29.6338H1V1.63379H8"
                      stroke="#D7D78D"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Assign tasks{" "}
                  <svg
                    width="9"
                    height="31"
                    viewBox="0 0 9 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 29.6338H8V1.63379H1"
                      stroke="#D7D78D"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center lg:mt-0 mt-2">
                <button className="btn-three lg:ml-2 ml-0 lg:mt-0 mt-3">
                  <svg
                    width="9"
                    height="31"
                    viewBox="0 0 9 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 29.6338H1V1.63379H8"
                      stroke="#D7D78D"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Role management
                  <svg
                    width="9"
                    height="31"
                    viewBox="0 0 9 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 29.6338H8V1.63379H1"
                      stroke="#D7D78D"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="task-right lg:flex hidden relative">
          <img className="task-img-one" src={img2} loading="lazy" alt="" />
          <img className="task-img-two" src={img3} loading="lazy" alt="" />
        </div>
      </div>
    </section>
  );
};

export default TaskManagement;
