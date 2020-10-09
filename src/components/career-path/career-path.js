import React from "react";
import "./career-path.scss";
import { useParams } from "react-router-dom";

import Header from "../shared/header/header";
import RolePanel from "../shared/panel/panel";
import NextStep from "../shared/next-step/next-step";
import PageTitle from "../shared/page-title/page-title";

const CareerPath = () => {
  const { name } = useParams();
  return (
    <React.Fragment>
      <Header classLogo="logo"/>
      <PageTitle myClass="section__title" title="Career Path"/>
      <NextStep myClass="next__btn next" route={`/triforce/${name}`}/>
      <div className="career">
        <img
          className="career__img"
          src={process.env.PUBLIC_URL + "../assets/img/character.png"}
          alt="character"
        ></img>
        <div className="career__panels">
          <RolePanel
            className="expansion-p"
            title="Senior MGMT" 
            branches={[["CTO", "STUDIO PARTNER"], ["CTO", "VP TECH"]]}
          />
          <RolePanel
            className="level__panel"
            title="Expert & MGM" 
            branches={[
              ["L6", "", "L5", "", "L4"],
              ["SUBJECT MATTER EXPERT", "SUBJECT MATTER EXPERT", "SUBJECT MATTER EXPERT"],
              ["TECHNICAL DIRECTOR", "TECHNICAL MANAGER", "TECHNICAL MANAGER"]
            ]}
          />
          <RolePanel
            className="level__panel"
            title="Senior" 
            branches={[["L3", "L2", "L1"], ["ARCHITECT", "SOFTWARE DESIGNER", "SENIOR"]]}
          />
          <RolePanel
            className="expansion-p"
            title="Initial and Mid level" 
            branches={[["SEMI SENIOR ADV", "SEMI SENIOR", "JUNIOR ADV", "JUNIOR"]]}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CareerPath;
