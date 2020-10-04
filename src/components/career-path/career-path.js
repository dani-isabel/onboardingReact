import React from "react";
import "./career-path.scss";

import Header from "../shared/header/header";
import RolePanel from "./role-panel/role-panel";
import NextStep from "../shared/next-step/next-step";
import PageTitle from "../shared/page-title/page-title";

const CareerPath = () => {
  return (
    <React.Fragment>
      <Header />
      <PageTitle myClass="section__title" title="Career Path"/>
      <NextStep myClass="next__btn next"/>
      <div className="career">
        <img
          className="career__img"
          src={process.env.PUBLIC_URL + "../assets/img/character.png"}
          alt="character"
        ></img>
        <div className="career_panels">
          <RolePanel
            title="Senior MGMT"
            roles={["CTO", "STUDIO PARTNER", "VP TECH"]}
          />
          <RolePanel
            title="Expert & MGM"
            roles={[
              "SUBJECT MATTER EXPERT | dfnrdmn",
              "TECHNICAL DIRECTOR",
              "TECHNICAL MANAGER",
            ]}
          />
          <RolePanel
            title="Senior"
            roles={["ARCHITECT", "SOFTWARE DESIGNER", "SENIOR"]}
          />
          <RolePanel
            title="Initial and Mid level"
            roles={["SEMI SENIOR ADV", "SEMI SENIOR", "JUNIOR ADV", "JUNIOR"]}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CareerPath;
