import React from "react";
import { Router, Link } from "@reach/router";
import { GlobalStyle } from "./styles";

//Containers
import Home from "./Container/Home";
import PastTrial from "./Container/PastTrial";
import HIW from "./Container/HIW";
import Auth from "./Container/Auth";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path="/" />
        <PastTrial path="/past-trial" />
        <HIW path="/how-it-works" />
        <Auth path="/auth" />
      </Router>
    </>
  );
}

export default App;
