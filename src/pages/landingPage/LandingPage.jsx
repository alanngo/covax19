import FullPageContainer from "../../components/layout/FullPageContainer";
import "./landing.css";
const LandingPage = () => {
  return (
    <FullPageContainer>
      <div className="landing--panels panel-green"></div>
      <div className="landing--panels panel-yeet"></div>
    </FullPageContainer>
  );
};

export default LandingPage;
