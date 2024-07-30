import img1 from "../../../public/Images/task/icon.png";
import img2 from "../../../public/Images/task/graphics.png";
import "./TaskManagement.css";

const TaskManagement = () => {
  return (
    <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-10 py-16">
        <div className="p-2">
          <div className="">
            <img src={img1} alt="" />
          </div>
          <div className="mt-4">
            <h2 className="task-title">
              Tasks management with Team Contribution
            </h2>
            <div className="lg:pr-36 pr-0">
              <p className="task-title-two mt-4">
                The most powerful localize language software that build team to
                manage your project.
              </p>
              <p className="task-title-two">
                Track Assign task and role to your desired person. Communication
                and manage member with smooth experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
