import React from "react";
import "./introduction.scss";
import { useParams } from "react-router-dom";

import Header from "../shared/header/header";
import KeyInfo from "./keyInfo/keyInfo";

const Introduction = () => {
  const { name } = useParams();
  return (
    <div className="infoUser">
      <Header classLogo="logo"/>
      <h3 className="introduction">
        <span className="userName">{name}</span> already belong to a studio,
        have a <br></br> seniority and probably already work on an specific
        project. <br></br> To understand this better
      </h3>
      <h1>Let's imagine!</h1>
      <KeyInfo name={name}/>
    </div>
  );
};

export default Introduction;
