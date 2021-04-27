import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function NavigationText({data}) {
    return (
        <ul className="list-group list-group-flush rounded mb-2">
            {data.map(e=> (<Link className="list-group-item" to={'/history#'+ e.label} smooth key={e.id}>{e.label}</Link>))}
      </ul>
    )
}

export default NavigationText;