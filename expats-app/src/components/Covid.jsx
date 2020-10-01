import React, { useEffect, useState } from "react";

function Covid() {
    const [data, setData] = useState({});
    const [lastday, setLastday] = useState({});
    const [increased, setIncreased] = useState({});
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                await Promise.all([                    
                    fetch("http://localhost:3005/covid/globalCases")
                    .then((response) => response.json())
                    .then(setData),
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
 
    return (
        <>
        {loading ? <div>Loading...</div>:
        hasError? <div>Error</div> :
        (<div><h2> Country: {data.NewConfirmed} <br />
           {/*  Cases: {lastdays}  <br />
            Date: {increased} */}      
        </h2>
        </div>) }
        
         </>

    )

    
}

export default Covid