import React, {useEffect, useState, useCallback} from 'react'
import _ from "lodash";

function PlacesChose({data, setupArray}) {
    let forChose = _.chunk(data, 3)
    const choose = [forChose];


    return (
        choose[0].map(placeAr => <div className="row">{
            placeAr.map(place => <div key={place.name} className="col-sm-4 text-primary text-center m-0" onClick={() => setupArray(place)}><h2 className="bg-white rounded p-1">{place.name}</h2></div>)
        }</div>)
    )
}

export default PlacesChose
