import React from "react";
import "./scss/Header.css";
import logo from "./../assets/CovidTrackerLogo.png"

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo"/>
        <p>COVID-19 Tracker</p>
      </header>
    </>
  );
}

export default Header;
