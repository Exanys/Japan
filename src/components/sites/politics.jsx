import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Politics() {
    const [politics, setPolitics] = useState([]);

    useEffect(()=> {
        axios.get('https://japan-site.herokuapp.com/api/politics', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(res => setPolitics(res.data))
        .catch(error => console.log(error));
    })


    return (
        <div>
            <p>There will be informotaion about politics in Japan soon!</p>
        </div>
    )
}

export default Politics
