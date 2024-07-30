import EasyTranslation from "../../components/Home/EasyTranslation";
import TaskManagement from "../../components/Home/TaskManagement";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="" style={{ backgroundColor: "#f8f8e9", width: '100%' }}>
        <EasyTranslation />
        <TaskManagement />
      </div>
    </>
  );
};

export default Home;
