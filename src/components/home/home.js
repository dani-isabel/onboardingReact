import React from "react";
import "./home.scss";

import Header from "../shared/header/header";
import Login from "./login/login";

const Home = () => {
  return (
    <div>
      <Header classLogo="logo"/>
      <section className="home">
        <h1 className="home__title">So excited to have you on board!</h1>
        <img
          className="home__img"
          src={process.env.PUBLIC_URL + "../assets/img/welcome.png"}
          alt="welcome"
        />
      </section>
      <Login/>
    </div>
  );
};

export default Home;
