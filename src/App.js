import React from "react";
// Routes
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
//Pages and components
import Home from "./pages/Home";
//styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path="/">
        <Link to="/">
          <h1 id="logo">magnum.</h1>
        </Link>
      </Route>
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
