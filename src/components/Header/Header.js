import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="shade">
        <h1>Memory NBA!</h1>
        <h2>
          Click on an image to earn points, but don't click on any more than
          once!
        </h2>
      </div>
    </header>
  );
};

export default Header;
