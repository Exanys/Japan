import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Formating from './common/formating'
import LoadingMask from "react-loadingmask";


function Results() {
    let finded = 'searching';
    const {word} = useParams();
    const [history, setHistory] = useState([]);
    const [islands, setIslands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [device, setDevice] = useState();

    useEffect(() => {
        const wid = window.screen.width;
        setDevice(wid);
        const fetchData = async () => {
        const [historyData, islandsData] = await Promise.all([
            getHistory(word),
            getIslands(word)
        ])
        setHistory(historyData);
        setIslands(islandsData);}
        fetchData();
        setLoading(false);


    },[word, device])
    
    const getHistory = async (bla) => {
        const {data} = await axios.get(`https://japan-site.herokuapp.com/api/history/search/${bla}`);
        return data;
    }
    const getIslands = async (bla) => {
        const {data} = await axios.get(`https://japan-site.herokuapp.com/api/islands/search/${bla}`);
        return data;
    }
    if(history[0] === undefined && islands[0] === undefined){finded ='nothing' }

    return (
        <div className="container-fluid">
        <LoadingMask loading={loading} loadingText={"Loading..."}>
        {loading ? (<div style={{height: '100px'}}></div>) :(finded === 'nothing' ? (<div ><h1 className={"text-white mb-4 text-center display-" + (device > 768 ? '1' : '4')}>Nothing found!!!</h1></div>) : (
        <div >
        <div>
            <Formating type='island' data={islands} />
        </div>
                <div>
                <Formating type='History' data={history} />
            </div>
            </div>
        ))}
        </LoadingMask>
        
    </div>
    )
}

export default Results
