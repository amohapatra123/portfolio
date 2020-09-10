import React, { Suspense } from "react";
import "./App.css";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes/Routes";
function App() {
  const routcomponent = routes.map(({ path, component, id }) => (
    <Route exact path={path} component={component} key={id} />
  ));
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>{routcomponent}</Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
