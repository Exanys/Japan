import React,{ useState, useEffect} from 'react'
import NavigationText from './common/navigationText'
import Pharagraph from './common/pharagraph'
import axios from 'axios'
import LoadingMask from "react-loadingmask";

function History() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://japan-site.herokuapp.com/api/history')      
        .then((response) => {
            setData(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
          
    },[])


    return (
        <div className="container-fluid">
            <LoadingMask loading={loading} loadingText={"Loading..."}>
            {loading ? (<div style={{height: '100px'}}></div>) :(<div className={"row"}>
                <div className="col-md-3"><NavigationText data={data}/></div>
                <div className="col-md-9">
                    {data.map(i=> <Pharagraph pharaClass="" headClass="bg-secondary text-light rounded p-2" key={i._id} text={i.text} head={i.label + ' (' + i.time + ')'} mark={i.label} />)}
                    </div>
            </div>)}
            </LoadingMask>
            
        </div>
    )
}

export default History
