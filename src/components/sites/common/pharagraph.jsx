import React from 'react'

function Pharagraph({head, text, mark, headClass, pharaClass}) {
    return (
        <>
            <h1 className={headClass} id={mark}>{head}</h1>
            <p className={pharaClass} style={{fontSize: "150%"}} >{text}</p>
          </>
    )
}

export default Pharagraph
