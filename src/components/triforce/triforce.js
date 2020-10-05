import React from 'react'
import Header from '../shared/header/header'
import NextStep from '../shared/next-step/next-step'
import PageTitle from '../shared/page-title/page-title'
import TagTriforce from './tag-triforce/tag-triforce'

const Triforce = () => {
    return (
        <div className="triforce">
            <Header/>
            <PageTitle myClass="section__title" title="The Triforce"/>
            <NextStep myClass="next__btn next"/>
            <TagTriforce/>
        </div>
    )
}

export default Triforce;
