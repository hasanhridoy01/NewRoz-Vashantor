import EasyTranslation from "../../components/Home/EasyTranslation";
import KeyFeature from "../../components/Home/KeyFeature";
import TaskManagement from "../../components/Home/TaskManagement";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="" style={{ backgroundColor: "#f8f8e9", width: '100%' }}>
        <EasyTranslation />
        <TaskManagement />
        <KeyFeature />
      </div>
    </>
  );
};

export default Home;
