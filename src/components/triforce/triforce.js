import React from 'react';
import './triforce.scss';
import { useParams } from "react-router-dom";

import Header from '../shared/header/header';
import NextStep from '../shared/next-step/next-step';
import PageTitle from '../shared/page-title/page-title';
import TagTriforce from './tag-triforce/tag-triforce';

const Triforce = () => {
    const { name } = useParams();
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className="triforce">
            <header className="triforceHeader">
                <div className="triforceHeader__div">
                <Header classLogo="logo__header"/>
                <PageTitle myClass="triforceHeader__title" title="The Triforce"/>
                </div>
                <p>The three aspects consist of the Studio, TDC and Accounts</p>
            </header>
            <section className="tags">
                <h1 className="tags__title"><span>{nameCapitalized}</span> is here</h1>
                <TagTriforce/>
                <NextStep myClass="next__btn next" route={`/fci3`}/>
            </section>
        </div>
    )
}

export default Triforce;
