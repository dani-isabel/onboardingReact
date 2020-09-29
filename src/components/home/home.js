import React, { useState } from "react";
import "./home.scss";

import Header from "../header/header";
import Login from "../login/login";

const Home = () => {
const [newName, setNewName] = useState();  

  const Newname = (name) => {
    setNewName(name);        
  };

  return (
    <div>
      <Header />
      <section>
        <h1>So excited to have you on board!</h1>
        <img
          className="welcome"
          src={process.env.PUBLIC_URL + "../assets/welcome.png"}
          alt="welcome"
        />
      </section>
      <Login name={Newname} />
    </div>
  );
};

export default Home;
