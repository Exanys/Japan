import React,{ useState, useEffect} from 'react'
import NavigationText from './common/navigationText'
import Pharagraph from './common/pharagraph'
import axios from 'axios'
import LoadingMask from "react-loadingmask";

function History() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [offSet, setOffSet] = useState(false)

    


    useEffect(() => {
        window.addEventListener("scroll", ()=>{setOffSet(window.pageYOffset)})
        axios.get('https://japan-site.herokuapp.com/api/history')      
        .then((response) => {
            setData(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
          
    },[])

    const scrollingUp = () => {
        setOffSet(400)
        window.scrollTo(0,400);
    }


    return (
        <div className="container-fluid">
            <LoadingMask loading={loading} loadingText={"Loading..."}>
            {loading ? (<div style={{height: '100px'}}></div>) :(<div className={"row"}>
                <div className="col-md-3"><NavigationText data={data}/></div>
                <div className="col-md-9">
                    {data.map(i=> <Pharagraph pharaClass="" headClass="bg-secondary text-light rounded p-2" key={i._id} text={i.text} head={i.label + ' (' + i.time + ')'} mark={i.label} />)}
                    </div>
                    {offSet > 900 && (<button className="btn bg-secondary fixed-bottom text-white m-3" onClick={scrollingUp}>^</button>)}
            </div>)}
            </LoadingMask>
            
        </div>
    )
}

export default History
