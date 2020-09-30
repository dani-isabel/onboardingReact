import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "../assets/logo.png"}
        alt="logo"
      />
    </header>
  );
};

export default Header;
