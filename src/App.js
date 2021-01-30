import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Faq from "./pages/Faq";
import LandingPage from "./pages/LandingPage";
import Test from "./pages/Test";
import WriteReview from "./pages/WriteReview";
import ShowReviews from "./pages/ShowReviews"
const  App = () =>
(
    <Fragment>
      <Router>
        <NavigationBar />
        <Container>
          <Route path="/landingpage"><LandingPage /></Route>
          <Route path="/test"><Test /></Route>
          <Route path="/faq"><Faq /></Route>
          <Route path="/writeReview"><WriteReview /></Route>
          <Route path="/showReviews"><ShowReviews /></Route>
        </Container>
      </Router>
    </Fragment>
);

export default App;
