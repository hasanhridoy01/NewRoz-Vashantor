import img1 from "../../../public/Images/task/icon.png";
import img2 from "../../../public/Images/task/Invite team member.png";
import img3 from "../../../public/Images/task/Comments.png";
import "./TaskManagement.css";


const TaskManagement = () => {
  return (
    <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-10 py-16 items-center">

        <div className="p-2 task-left">
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

            <div className="mt-5">
                <button className="btn-one">Add people or group</button>
                <button className="btn-two lg:ml-2 ml-3">Assign tasks</button>
                <button className="btn-three lg:ml-2 ml-0 lg:mt-0 mt-3">Role management</button>
            </div>

          </div>
        </div>

        <div className="task-right lg:flex hidden relative">
            <img className="task-img-one" src={img2} alt="" />
            <img className="task-img-two" src={img3} alt="" />
        </div>

      </div>
    </div>
  );
};

export default TaskManagement;
