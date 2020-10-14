import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';

function Covid() {
    const [global, setGlobal] = useState({});
    const [lastday, setLastday] = useState({});
    const [increased, setIncreased] = useState({});
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false)
    const [tbg, setTbg] = useState("")
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                await Promise.all([                    
                    fetch("http://localhost:3005/covid/globalCases")
                    .then((response) => response.json())
                    .then(setGlobal),
                    fetch("http://localhost:3005/covid/lastData")
                    .then((response) => response.json())
                    .then(setLastday),
                    fetch("http://localhost:3005/covid/casesIncreased")
                    .then((response) => response.json())
                    .then(setIncreased)
                ])
                setLoading(false)
            } catch {
                console.log("data fetch error")
                setHasError(true)
                setLoading(false)
            }
        })()
    }, []);   

      useEffect(() => {
          let num = global.TotalConfirmed
        let number =  Math.floor(Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k')
        setTbg(number);
     }, []);
     
    return (
        <>
        {console.log('global', global )}
        {loading ? <div>Loading...</div>:
        hasError? <div>Error</div> :
        (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>COVID GLOBAL DATA</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total Confirmed:{tbg}  </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Total Deaths:{global.TotalDeaths} </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Total Recovered:{global.TotalRecovered} </Card.Subtitle>
              
            </Card.Body>
          </Card> 
            /* <div><h2> Country: {data.NewConfirmed} <br />
                
        </h2>
        </div> */) }
        
         </>

    )

    
}

export default Covid