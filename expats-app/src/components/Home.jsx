import React, { useEffect, useState } from "react";
import HackerNews from "./HackerNews";

function Home() {
    const [country, setCountry] = useState("");
    const [cases, setCases] = useState("");
    const [date, setDate] = useState("");
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect( () => {
  setLoading(true)
       fetch("http://localhost:3005/covid/lastData")
            .then( res => res.json())
            .then(data => {console.log('COVID-LastData',data)
            setCountry(data.Country);
            setCases(data.Confirmed);
            setDate(data.Date)
            setLoading(false)
            })
            .catch(err => {setHasError(true)
            setLoading(false)})
        }, [])
    return (
        <>
        {loading ? <div>Loading...</div>:
        hasError? <div>Error</div> :
        (<div><h2> Country: {country} <br />
            Cases: {cases}  <br />
            Date: {date}      
        </h2>
        {<HackerNews />}</div>) }
        
         </>

    )

    
}

export default Home