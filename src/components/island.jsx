import React from 'react'
import Honshu from "./islands/honshu"
import Hokkaido from "./islands/hokkaido"
import Kyushu from "./islands/kyushu"
import Shikoku from "./islands/shikoku"
import Okinawa from "./islands/okinawa"


function Island({match}) {
    const choose = (name) =>{
        switch(name){
            case "Honshu": return <Honshu />;
            case "Hokkaido": return <Hokkaido />;
            case "Kyushu": return <Kyushu />;
            case "Shikoku": return <Shikoku />;
            default: return <Okinawa />;
        }
    }

    return (
        <div>
            {choose(match.params.id)}
        </div>
    )
}

export default Island
