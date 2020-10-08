import React from 'react';
import './studios.scss';
import { useParams } from "react-router-dom";

import Header from '../shared/header/header';
import PageTitle from '../shared/page-title/page-title';
import NextStep from '../shared/next-step/next-step';
import DemoCarousel from '../shared/carousel/carousel';

const Studios = () => {
    const { name } = useParams();
    return (
        <div className="studios">
            <header>
                <Header classLogo="logo"/>
                <PageTitle myClass="section__title fci__title" title="Classes Studios"/>
            </header>
            <section className="studios__carousel">
                <DemoCarousel 
                images={[process.env.PUBLIC_URL + "../assets/img/foundation.png",
                process.env.PUBLIC_URL + "../assets/img/speciality.png",
                process.env.PUBLIC_URL + "../assets/img/strategic.png"]}
                alt={"Studios"}/>
            </section>
                <NextStep myClass="next__btn next" route={`/career/${name}`}/>
        </div>
    )
}

export default Studios;
