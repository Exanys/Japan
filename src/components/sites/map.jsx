import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GeoMap from './common/geoMap'

function Map() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/prefectures', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
    .then(res =>{
        //setData(res.data);
        setData(res.data);
        console.log(data);})
    .catch(error => console.log(error));},[])

    return (
        <div>
           <GeoMap data={data} />  
        </div>
    )
}

export default Map
