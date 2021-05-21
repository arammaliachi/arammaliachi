import React from "react";
import Header from "./Header";
import { ReactComponent as LogoSVG } from "./assets/arammaliachi_black.svg";
import "./stylesheets/styles.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <nav className="nav-menu">
        <LogoSVG />
      </nav>
      <Header />
      <img
        src="https://varmal.blob.core.windows.net/arch/warehouse--00.png"
        alt="x"
      />
    </div>
  );
}

export default MainLayout;
