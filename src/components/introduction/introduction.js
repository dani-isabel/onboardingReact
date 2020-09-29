import React from 'react';
import "./introduction.scss";

import Header from "../header/header";
import KeyInfo from "../keyInfo/keyInfo";

const information = () => {
    return (
        <div className="infoUser">
            <Header/>
    <h3 className="introduction"><span className="userName">Daniela</span> already belong to a studio, have a <br></br> seniority and probably already work on an specific project. <br></br> To understand this better</h3>
    <h1>Let's imagine!</h1>
    <KeyInfo/>
        </div>
    )
}

export default information