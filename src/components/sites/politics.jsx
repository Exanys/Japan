import React,{useEffect, useState} from 'react'
import axios from 'axios'
import FormatPolitics from "./common/formatPolitics"
import LoadingMask from "react-loadingmask";

function Politics() {
    const [politics, setPolitics] = useState([]);
    const [selectedMain, setSelectedMain] = useState(false)
    const [selectedText, setSelectedText] = useState("")
    const [loaded, setLoaded] = useState(false)

    const setAllFalse = (data)=> {
        let arr = data;
        arr.forEach(e =>{
            e.selected = false;
            e.about.forEach(i => i.selected=false)
        })
        return arr;
    }

    useEffect(()=> {
        axios.get('https://japan-site.herokuapp.com/api/politics', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(res => setPolitics(setAllFalse(res.data)))
        .catch(error => console.log(error));
          setLoaded(true);
    },[])

   const setAllTextFalse = ()=> {
       let newArr = politics;
       newArr.forEach(e =>  e.about.forEach(i=> i.selected = false))
       setPolitics(newArr)
   }

    const selectionText = (label) => {
        let newArr = politics;
        newArr.forEach(e =>  e.about.forEach(i=> 
            i.label !== label ? (i.selected = false): (i.selected = !i.selected))
            )
        setPolitics(newArr)
        setSelectedText(selectedText === label ? "" : label)
    }
    const selectionMain = (type) => {
        setAllTextFalse()
        let already = false;
        let newArr = politics;
        already = newArr.map(e => e.type === type && e.selected === true ? true : null)
        newArr.forEach(e => e.type !== type ? (e.selected = false) : (e.selected = !e.selected))
        setPolitics(newArr)
        !already.includes(true)|| !selectedMain ? setSelectedMain(`${type}`) : setSelectedMain(false)
    }

    return(!loaded ? (<LoadingMask loading={!loaded} loadingText={"Loading..."}><div style={{width: "100%", height: "500px"}}></div></LoadingMask>) :


     (
        
        <div className="container-fluid">
            {politics.map(e => <div className="row"><FormatPolitics selectedText={selectedText} selectedMain={e.type !== selectedMain ? false : true} data={e.about} name={e.type} selectionText={selectionText} selectionMain={selectionMain} /></div>)}  
        </div>
        
    ))
}

export default Politics
