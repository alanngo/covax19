import FullPageContainer from "../../components/layout/FullPageContainer";
import "./landing.css";
import { Link } from "react-router-dom";

const LandingPage = () => 
(
    <FullPageContainer>
      <div className="landing--panels panel-green"></div>

      <div className="landing--panels panel-yeet">

      <h1>Covax-19 is the hubspot for Covid vaccine reviews.</h1>

      <p>You can update us with your post-vaccine symptoms, read other reviews, and explore our FAQ.</p>

      <div className="buttonGroup">

        <Link to="/writeReview" style={{ textDecoration: 'none' }}>
          <button className="redButton">Write a Review</button>
        </Link>

        <Link to="/showReviews" style={{ textDecoration: 'none' }}>
          <button className="yellowButton" as={Link} to="/showReviews">Browse Reviews</button>
        </Link>

        <Link to="/faq" style={{ textDecoration: 'none' }}>
          <button className="greenButton" as={Link} to="/faq">FAQ</button>
        </Link>

        <Link to="/about" style={{ textDecoration: 'none' }}>
          <button className="blueButton" as={Link} to="/about">Meet The Team</button>
        </Link>

      </div>

      </div>

    </FullPageContainer>
);


export default LandingPage;
