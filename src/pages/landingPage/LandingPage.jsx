import FullPageContainer from "../../components/layout/FullPageContainer";
import "./landing.css";
const title = "Covax-19 is the hubspot for Covid vaccine reviews"
const subtitle="You can update us with your post-vaccine symptons, read other reviews and explore our FAQ"
const LandingPage = () => {
  return (
    <FullPageContainer>
      <div className="landing--panels panel-green"></div>
      <div className="landing--panels panel-yeet">
      </div>
    </FullPageContainer>
  );
};

export default LandingPage;
