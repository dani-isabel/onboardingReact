import React from 'react'

import './keyInfo.scss';

 const keyInfo = (name) => {
    return (
        <div className="keyInfo">
            <h3>First we need to create our <a href={`/studios/${name.name}`}>fictional character!</a></h3>
        </div>
    )
}

export default keyInfo