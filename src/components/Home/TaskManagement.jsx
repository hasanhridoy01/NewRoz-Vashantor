import img1 from '../../../public/Images/task/icon.png'
import img2 from '../../../public/Images/task/graphics.png'

const TaskManagement = () => {
    return (
        <div className='container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16'>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-10 py-16">
                <div className="">
                  <img src={img1} alt="" />
                  <h2>Tasks management with Team Contribution</h2>
                </div>
            </div>
        </div>
    );
};

export default TaskManagement;