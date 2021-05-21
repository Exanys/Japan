import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

function Formating({data, type}) {
    if(data[0] === undefined) return null;
    let label = String(type);
    if(type === 'island'){label = 'Islands'}
    if(type === 'History'){
        return (<>
        <h1 className="bg-primary text-light rounded p-2 text-center">{type}</h1>
        <ul className="list-group list-group-flush rounded mb-2">
            {data.map(e=> (<HashLink style={{fontSize: "125%"}} key={e._id} className="list-group-item text-danger" to={'/history#'+ e.label} smooth >{e.label}</HashLink>))}
      </ul>
        </>)
    }
    return (<>
        <h1 className="bg-primary text-light rounded p-2 text-center">{label}</h1>
        <ul className="list-group list-group-flush rounded mb-2 ">
            {data.map(e=> (<Link style={{fontSize: "125%"}} key={e._id} className="list-group-item text-danger" to={'/'+ type +'/'+ e.name} smooth >{e.name}</Link>))}
      </ul>
        </>)
    
    
}

export default Formating
