import React,{ useState, useEffect} from 'react'
import NavigationText from './common/navigationText'
import Pharagraph from './common/pharagraph'
import axios from 'axios'
import LoadingMask from "react-loadingmask";

function History() {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('https://japan-site.herokuapp.com/api/history')      
        .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
          setLoaded(true);
    },[])
    return (
        <div className="container-fluid">
            <LoadingMask loading={!loaded} text={'Loading...'}>
            <div className="row">
                <div className="col-md-3"><NavigationText data={data}/></div>
                <div className="col-md-9">
                    {data.map(i=> <Pharagraph key={i._id} text={i.text} head={i.label + ' \(' + i.time + '\)'} mark={i.label} />)}
                    </div>
            </div>
            </LoadingMask>
            
        </div>
    )
}

export default History
