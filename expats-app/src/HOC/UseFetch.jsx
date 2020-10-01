import React, { useEffect, useState } from "react";
function UseFetch(url, opts) {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url, opts)
        .then(resp => resp.json())
        .then(data => {
            //console.log('Hacker News',data)
        setResponse(data)
        setLoading(false)
            
        })
            .catch(() => {
                setHasError(true)
                setLoading(false)
            })
    }, [ url ])
    return [ response, loading, hasError ]
}

export default UseFetch