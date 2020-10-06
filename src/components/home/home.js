import React from "react";
import "./home.scss";

import Header from "../shared/header/header";
import Login from "./login/login";

const Home = () => {
  return (
    <div>
      <Header classLogo="logo"/>
      <section>
        <h1>So excited to have you on board!</h1>
        <img
          className="welcome"
          src={process.env.PUBLIC_URL + "../assets/img/welcome.png"}
          alt="welcome"
        />
      </section>
      <Login/>
    </div>
  );
};

export default Home;
