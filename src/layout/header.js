import { useState } from "react";
import "./header.css";
import logoSvg from "../assets/logo-light.svg";
import hamburgerSvg from "../assets/icon-hamburger.svg";
import bicycle400Svg from "../assets/icon-bicycle-400.svg";
import routeSvg from "../assets/icon-route.svg";
import vacationSvg from "../assets/icon-vacation.svg";
import phoneSvg from "../assets/icon-phone.svg";

function Logo() {
  return (
    <h1 className="logo">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://reiracode.github.io/nbike/  "
      >
        <img src={logoSvg} alt="Bikeland" />
      </a>
    </h1>
  );
}



function Header(props) {


  return (
    <header>
      <div className="header_wrapper">
        <Logo />
        
      </div>
   
    </header>
  );
}

export default Header;
