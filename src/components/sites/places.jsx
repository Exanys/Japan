import React,{useEffect, useState} from 'react'
import axios from "axios" 
import PlacesChose from './common/placesChose'
import Pharagraph from './common/pharagraph'
import Kyoto from "../../img/KyotoImg.jpg"
import Kanazawa from "../../img/KanazawaImg.jpg"
import Tokyo from "../../img/TokyoImg.jpg"
import Hakone from "../../img/HakoneImg.jpg"
import Hiroshima from "../../img/HiroshimaImg.jpg"
import KoyaSanimg from "../../img/Koya-SanImg.jpg"
import Nara from "../../img/NaraImg.jpg"
import Tsumago from "../../img/TsumagoImg.jpg"
import Nikko from "../../img/NikkoImg.jpg"
import Takayama from "../../img/TakaymaImg.jpg"
import LoadingMask from "react-loadingmask";
import {useLocation} from "react-router-dom"

function Places() {
    let location = useLocation().pathname;
    location.length >9 ? (location = location.toString()) : (location = false);
    location && (location = location.slice(8))
    const [places, setPlaces] = useState([])
    const [curPlace, setCurPlace] = useState({name: (location ? location : "Kyoto")})
    const [forChoose, setForChoose] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [device, setDevice] = useState();
    


    useEffect(() => {
        const wid = window.screen.width;
        setDevice(wid);
        axios.get('https://japan-site.herokuapp.com/api/places', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
          .then(res => {
              setPlaces(res.data)
              let currPlace = res.data.filter(e => e.name === curPlace.name)
              let poss = res.data.filter(e => e.name !== curPlace.name)
              setCurPlace(currPlace[0])
              setForChoose(poss)
              setLoaded(true);
            })
          .catch(error => console.log(error))
          
    },[])

    const setupArray = (place) => {
        setLoaded(false)
        let poss = places.filter(e => e.name !== place.name)
        setCurPlace(place)
        setForChoose(poss)
        setLoaded(true)
    }
    const selectImg = (name) => {
  
        switch (name) {
            case "Tokyo": 
                
                return Tokyo;
            case "Kyoto":
                return Kyoto;
            case "Kanazawa":
                return Kanazawa;
            case "Hakone":
                return Hakone;
            case "Hiroshima":
                return Hiroshima;
            case "Nara":
                return Nara;
            case "Tsumago":
                return Tsumago;
            case "Nikko":
                return Nikko;
            case "Takayama":
                return Takayama;
            default:
                return KoyaSanimg
                }
    }

    return (
        <LoadingMask loading={!loaded} loadingText={"Loading..."} >
        <div className="container-fluid">
            <PlacesChose data={forChoose} setupArray={setupArray} />
            <div className="row">
                <div className="col-sm-7"><Pharagraph text={curPlace.text} head={curPlace.name} mark={curPlace.name} headClass={"bg-primary text-center text-white rounded-top pb-3 pt-2 " + (device > 768 && 'display-3')} pharaClass="" />
            <h4 className="font-weight-bold">How long you should stay: </h4><p style={{fontSize: "150%"}}>{curPlace.stay}</p>
            </div> 
            <div className="col-sm-5">
                <img src={selectImg(curPlace.name)} alt={curPlace.name} className="img-thumbnail"/>  
            </div>   
            </div>        
        </div>
        </LoadingMask>
    )
}

export default Places
