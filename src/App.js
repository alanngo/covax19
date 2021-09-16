import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Faq from "./pages/faq/Faq";
import LandingPage from "./pages/landingPage/LandingPage";
import Test from "./pages/Test";
import WriteReview from "./pages/reviewForm/WriteReview";
import ShowReviews from "./pages/reviews/ShowReviews";
import About from "./pages/about/About";

const App = () => 
(
  <>
    <Router>
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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
