import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function NavigationText({data}) {
    return (
        <ul className="list-group list-group-flush rounded mb-2">
            {data.map(e=> (<Link style={{fontSize: "125%"}} key={e._id} className="list-group-item text-danger" to={'/history#'+ e.label} smooth >{e.label}</Link>))}
      </ul>
    )
}

export default NavigationText;