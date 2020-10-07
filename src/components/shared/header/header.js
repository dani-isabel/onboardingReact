import React from "react";
import "./header.scss";

import { Link } from "react-router-dom";

const Header = ({classLogo}) => {
  return (
    <header>
      <Link to="/">
      <img
        className={classLogo}
        src={process.env.PUBLIC_URL + "../assets/img/logo.png"}
        alt="logo"
      />
      </Link>
    </header>
  );
};

export default Header;
