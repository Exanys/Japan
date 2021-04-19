import React from 'react'

function Info({data}) {
    return (
        <ul className="list-group list-group-flush rounded mb-2">
        <li className="list-group-item" >Largest city: {data.largest_city}</li>
        <li className="list-group-item">
          Area: {data.area} km<sup>2</sup>
        </li>
        <li className="list-group-item">Population: {data.population}</li>
        <li className="list-group-item">Highest point: {data.highest_point}</li>
      </ul>
    )
}

export default Info;