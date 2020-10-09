import React from 'react'

import './keyInfo.scss';

 const keyInfo = (name) => {
    return (
        <div className="keyInfo">
            <h3 className="intro__description">First we need to create our <a className="keyInfo__link" href={`/studios/${name.name}`}>fictional character!</a></h3>
        </div>
    )
}

export default keyInfo