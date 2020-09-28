import React, { useEffect, useState } from "react";

function Home() {
    const [country, setCountry] = useState("");
    const [cases, setCases] = useState("");
    const [date, setDate] = useState("")

    useEffect( () => {
       fetch("http://localhost:3005/covid/liveData")
            .then( res => res.json())
            .then(data => {console.log(data)
            setCountry(data.Country);
            setCases(data.Cases);
            setDate(data.Date)
            })
        }, [])
    return (
        <h1> Country: {country} <br />
             Cases: {cases}  <br />
             Date: {date}      
         </h1>

    )

    
}

export default Home