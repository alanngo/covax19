import FullPageContainer from "../../components/layout/FullPageContainer";
import "./landing.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <FullPageContainer>
      <div className="landing--panels panel-green"></div>

      <div className="landing--panels panel-yeet">

      <h1>Covax-19 is the hubspot for Covid vaccine reviews.</h1>

      <p>You can update us with your post-vaccine symptoms, read other reviews, and explore our FAQ.</p>

      <div className="buttonGroup">

        <Link to="/writeReview" style={{ textDecoration: 'none' }}>
          <button className="writeButton">Write a review</button>
        </Link>

        <Link to="/showReviews" style={{ textDecoration: 'none' }}>
          <button className="browseButton" as={Link} to="/showReviews">Browse reviews</button>
        </Link>

        <Link to="/faq" style={{ textDecoration: 'none' }}>
          <button className="faqButton" as={Link} to="/faq">FAQ</button>
        </Link>

      </div>

      </div>

    </FullPageContainer>
  );
};

export default LandingPage;
