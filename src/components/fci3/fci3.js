import React from "react";
import './fci3.scss';

import Header from "../shared/header/header";
import RolePanel from "../shared/panel/panel";
import NextStep from "../shared/next-step/next-step";
import PageTitle from "../shared/page-title/page-title";

const Fci3 = () => {
    return (
      <React.Fragment>
        <Header classLogo="logo"/>
        <PageTitle myClass="section__title fci__title" title="Globant Values & FCI"/>
        <NextStep myClass="next__btn next" route={`/...`}/>
        <div className="fci">
          <img
            className="fci__img"
            src={process.env.PUBLIC_URL + "../assets/img/character.png"}
            alt="character"
          ></img>
          <a 
            className="fci__a"
            href="https://sites.google.com/globant.com/people-site-2/talent-manifesto?authuser=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talent Manifesto
          </a>
          <div className="fci_panels">
            <RolePanel
              title="Excellence in your Work" 
              branches={[["FOCUS", "COMMITTED"]]}
            />
            <RolePanel
              title="Act Ethically" 
              branches={[['INTEGRITY']]}
            />
            <RolePanel
              title="Constantly Innovate / Thing Big" 
              branches={[["FAST LEARNER", "CLEAR THINKER", "INNOVATIVE"]]}
            />
            <RolePanel
              title="Team player / Have Fun" 
              branches={[["FLEXIBLE", "COLLABORATIVE", "INCLUSIVE"]]}
            />
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default Fci3;
  