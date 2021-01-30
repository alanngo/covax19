import NavigationBar from "../navbar/NavigationBar";
import "./landingcontainer.css";

const FullPageContainer = ({ children }) => (
  <div className="landing--container">
    <NavigationBar />
    <div className="landing__content">{children}</div>
  </div>
);

export default FullPageContainer;
