import React from 'react'

function Pharagraph({head, text, mark}) {
    return (
        <div>
            <h1 className="bg-secondary text-light rounded p-2" id={mark}>{head}</h1>
            <p style={{fontSize: "150%"}} >{text}</p>
          </div>
    )
}

export default Pharagraph
