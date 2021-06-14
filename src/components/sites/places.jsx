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

function Places() {
    const [places, setPlaces] = useState([])
    const [curPlace, setCurPlace] = useState({name: "Kyoto"})
    const [forChoose, setForChoose] = useState([])
    const [loaded, setLoaded] = useState(false)


    console.log(window.location.pathname)
    useEffect(() => {
        axios.get('https://japan-site.herokuapp.com/api/places', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
          .then(res => {
              setPlaces(res.data)
              let poss = res.data.filter(e => e.name !== curPlace.name)
              setForChoose(poss)
              setCurPlace(res.data[0])
              setLoaded(true);
            })
          .catch(error => console.log(error))
          
    },[])

    const setupArray = (place) => {
    
        let poss = places.filter(e => e.name !== place.name)
        console.log(place)
        setCurPlace(place)
        setForChoose(poss)
        
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
                <div className="col-sm-7"><Pharagraph text={curPlace.text} head={curPlace.name} mark={curPlace.name} headClass="bg-primary text-center text-white display-3 rounded-top pb-3" pharaClass="" />
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
