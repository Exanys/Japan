import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GeoMap from './common/geoMap'
import LoadingMask from "react-loadingmask";

function Map() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
   

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
        setLoading(false);})
    .catch(error => console.log(error));
  
},[])
    return (
        <div>
            <LoadingMask loading={loading} loadingText={"Loading..."} >
                {loading ? (<div style={{height: '100px'}}></div>) : (<GeoMap data={data} />) }
            </LoadingMask>
            
        </div>
    )
}

export default Map
