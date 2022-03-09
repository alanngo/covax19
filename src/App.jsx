import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./helper/routes";
const App = () =>
(
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Switch>
        {
          routes.map(r => (<Route key={r.id} path={r.path} component={r.component} />))
        }
      </Switch>
    </Router>
  </Suspense>
);

export default App;
