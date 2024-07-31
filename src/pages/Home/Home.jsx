import EasyTranslation from "../../components/Home/EasyTranslation";
import Expand from "../../components/Home/Expand";
import KeyFeature from "../../components/Home/KeyFeature";
import LanguageSupport from "../../components/Home/LanguageSupport";
import TaskManagement from "../../components/Home/TaskManagement";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="" style={{ backgroundColor: "#f8f8e9", width: '100%' }}>
        <EasyTranslation />
        <TaskManagement />
        <KeyFeature />
        <Expand />
        <LanguageSupport />
      </div>
    </>
  );
};

export default Home;
