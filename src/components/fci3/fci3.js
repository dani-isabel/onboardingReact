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
        <NextStep myClass="next__btn next" route={`/people`}/>
        <div className="fci">
            <a target="_blank" href="https://sites.google.com/globant.com/people-site-2/talent-manifesto?authuser=0">
              <img
                className="fci__img"
                src={process.env.PUBLIC_URL + "../assets/img/characterBoy.png"}
                alt="character"
              ></img>
            </a>
          <div className="fci_panels">
            <RolePanel
              className="expansion-p"
              title="Excellence in your Work" 
              branches={[["FOCUS", "COMMITTED"]]}
            />
            <RolePanel
              className="expansion-p"
              title="Act Ethically" 
              branches={[['INTEGRITY']]}
            />
            <RolePanel
              className="expansion-p"
              title="Constantly Innovate / Thing Big" 
              branches={[["FAST LEARNER", "CLEAR THINKER", "INNOVATIVE"]]}
            />
            <RolePanel
              className="expansion-p"
              title="Team player / Have Fun" 
              branches={[["FLEXIBLE", "COLLABORATIVE", "INCLUSIVE"]]}
            />
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default Fci3;
  