import React from 'react';
import './next-step.scss';

import { Link } from 'react-router-dom';

const NextStep = ({route,myClass}) => {
    return (    
        <Link to={route}>
            <button className={myClass}>{'>'}</button>
        </Link>
    )
}

export default NextStep;