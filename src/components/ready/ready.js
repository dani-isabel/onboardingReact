import React from 'react';
import './ready.scss';

import Header from "../shared/header/header";
import NextStep from "../shared/next-step/next-step";

const Ready = () =>{
    return(
        <div className="ready">
            <Header classLogo="logo"/>
            <NextStep myClass="next__btn next" route={`/people`}/>
            <h1 className="ready__title">WE ARE READY</h1>
            <a href="https://www.globant.com/" target="_blanck"><img className="ready__img" src={process.env.PUBLIC_URL + "../assets/img/logoGlobantWhite.png"} alt="Logo Globant"></img></a>

        </div>
    )
} 

export default Ready;