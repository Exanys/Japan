import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GeoMap from './common/geoMap'
import LoadingMask from "react-loadingmask";

function Map() {
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('https://japan-site.herokuapp.com/api/prefectures', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
    .then(res =>{
        //setData(res.data);
        setData(res.data);
        console.log(data);})
    .catch(error => console.log(error));
        setLoaded(true);
},[])
    return (
        <div>
            <LoadingMask loading={!loaded} text={'Loading...'} >
                <GeoMap data={data} /> 
            </LoadingMask>
            
        </div>
    )
}

export default Map
