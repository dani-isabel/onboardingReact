import React from "react";
import "./introduction.scss";
import { useParams } from "react-router-dom";

import Header from "../shared/header/header";
import KeyInfo from "./keyInfo/keyInfo";

const Introduction = () => {
  const { name } = useParams();
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="infoUser">
      <Header classLogo="logo"/>
      <h3 className="introduction">
        <span className="userName">{nameCapitalized}</span> already belong to a studio,
        have a seniority and probably <br></br> already work on an specific
        project. To understand this better
      </h3>
      <h1>Let's imagine!</h1>
      <KeyInfo name={name}/>
    </div>
  );
};

export default Introduction;
