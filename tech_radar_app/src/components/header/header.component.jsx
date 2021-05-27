import React from "react";
import RedirectButton from "../redirect-button/redirect-button.component.jsx";

const Header = () => (
  <nav className="header">
    <div className="flex-container">
      <div className="left-col">
        <h1 className="main-heading">TECHNOLOGY RADAR</h1>
      </div>
      <div className="right-col">
        <RedirectButton
          redirectPath="/languages_and_frameworks"
          classes="header-square one"
          >
          Languages & Frameworks
        </RedirectButton>
        <RedirectButton
          redirectPath="/data_platform"
          classes="header-square two"
          >
          Data Platform
        </RedirectButton>
        <div className="break" />
        <RedirectButton
          redirectPath="/tools"
          classes="header-square three"
          >
          Tools
        </RedirectButton>
        <RedirectButton
          redirectPath="/cloud_platform"
          classes="header-square four"
          >
          Cloud Platform
        </RedirectButton>
      </div>
    </div>
  </nav>
);

export default Header;
