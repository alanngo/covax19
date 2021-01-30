import { Fragment } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavigationBar from "./components/navbar/NavigationBar";
import Faq from "./pages/faq/Faq";
import LandingPage from "./pages/landingPage/LandingPage";
import Test from "./pages/Test";
import WriteReview from "./pages/reviewForm/WriteReview";
import ShowReviews from "./pages/reviews/ShowReviews";

const App = () => (
  <Fragment>
    <Router>
      {/* <NavigationBar /> */}
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/writeReview">
          <WriteReview />
        </Route>
        <Route path="/showReviews">
          <ShowReviews />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  </Fragment>
);

export default App;
