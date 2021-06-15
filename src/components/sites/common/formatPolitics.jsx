import React,{useState, useEffect} from 'react'

function FormatPolitics({data,selectedText, name, selectedMain, selectionMain, selectionText}) {
    const [device, setDevice] = useState()
    useEffect(() => {
        const wid = window.screen.width;
       setDevice(wid);
    },[selectedMain, selectedText, device])


    if(name === "Basics" || name === "Emperor") return(
        <div className="col-12">
        <h1 onClick={() =>selectionMain(name)} className={"text-white text-center rounded pb-3 pt-2 bg-" + (selectedMain ? "primary" : "secondary") + (device > 768 && ' display-2')}>{selectedMain ? data[0].label : name}</h1>
        {selectedMain && <p className="text-center" style={{fontSize: "125%"}}>{data[0].text}</p>}
    </div> 
    )

    return (
        <div className="container-fluid text-center">
            <div className="col-12 p-0"><h1 onClick={() =>selectionMain(name)}className={"text-white text-center rounded pb-3 pt-2 bg-" + (selectedMain ? 'primary' : "secondary")+(device > 768 && ' display-2')}>{name}</h1></div>
            <div className="row">{selectedMain && data.map(e=> <div className={"col-sm-"+ (e.selected ? "7" : "5")} ><h2 onClick={() =>selectionText(e.label)}className="bg-white rounded pb-3 pt-2" >{e.label}</h2>{e.selected && <p style={{fontSize: "125%"}}>{e.text}</p>}</div>)}</div>
        </div>
    )
}

export default FormatPolitics
