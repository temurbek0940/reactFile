import React from "react";
import "./assets/main.css";
import SiteLogo from "./assets/site"
import Buttons from "./components/Button/Buttons";
function App() {
  return <header className="site-header">
    <div className="container">
      <Buttons title={"salom"} />   
    </div>
  </header>;
}

export default App;
