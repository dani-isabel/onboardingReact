import React from 'react';
import Header from '../shared/header/header';
import PageTitle from '../shared/page-title/page-title';
import Card from '../shared/card/card';
import NextStep from '../shared/next-step/next-step';
import './keyPeople.scss';

const KeyPeople = () => {
    return (
        <div>
            <header>
                <Header classLogo="logo"/>
                <PageTitle myClass="section__title fci__title" title="UI Studio COPE"/>
            </header>
            <h1 className="keyPeople__title">Key people</h1>
            <section className="keyPeople">
                <Card rolePeople={"SP & UI STUDIO PARTNER"} imgPeople={process.env.PUBLIC_URL + "../assets/img/damian.png"} namePeople={"Damian Lazzarano"} emailPeople={"@damian.lazzarano"} />
                <Card rolePeople={"SP & UI STUDIO PARTNER"} imgPeople={process.env.PUBLIC_URL + "../assets/img/david.png"} namePeople={"David Correa"} emailPeople={"@david.correa"} />
                <Card rolePeople={"UI ENGINEERING PARTNER"} imgPeople={process.env.PUBLIC_URL + "../assets/img/luciana.png"} namePeople={"Luciana Zavaleta"} emailPeople={"@luciana.zavaleta"} />
                <Card rolePeople={"UI TDC FOCAL TECH. DIRECTOR"} imgPeople={process.env.PUBLIC_URL + "../assets/img/gabriel.png"} namePeople={"Gabriel Martinez"} emailPeople={"@gabo"} />
                <Card rolePeople={"UI ENGINEERING TECH. MANAGER"} imgPeople={process.env.PUBLIC_URL + "../assets/img/sebastian.png"} namePeople={"Sebastián Gómez"} emailPeople={"@s.gomez"} />
            </section>
            <NextStep myClass="next__btn next" route={`/people`}/>
        </div>
    )
}
export default KeyPeople;
