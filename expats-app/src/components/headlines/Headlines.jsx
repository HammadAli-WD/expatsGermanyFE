import React, { useState, useEffect } from "react";
import { Media, Spinner } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Headlines() {

  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://${process.env.REACT_APP_HOST_RAPIDAPI}/news/trendingtopics?textFormat=Raw&safeSearch=Off`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": process.env.REACT_APP_HOST_RAPIDAPI,
        "x-rapidapi-key": process.env.REACT_APP_KEY_RAPIDAPI,
        "x-bingapis-sdk": "true"
      }
    })
      .then(response => response.json())
      .then(data => data.value)
      .then(slice => {
        setResponse(slice.slice(0, 5))
        setLoading(false)
      })
      .catch(() => {
        setHasError(true)
        setLoading(false)
      })
  }, [])

  return (
    <>

      {loading ?
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> :
        (hasError ? <div>Error...</div> :
          (

            <ul className="list-unstyled">
              <h2>Bing News Headlines</h2>
              {response.map((tn, i) =>
                <Media as="li">
                  <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={tn.image.url}
                    alt="Generic placeholder"
                  />

                  <Media.Body>
                    <h3><Link to={{ pathname: tn.webSearchUrl }} target="_blank" >{tn.name}</Link></h3>
                    <p>{tn.query.text}</p>
                  </Media.Body>
                </Media>
              )}

            </ul>
          ))}


    </>
  )
}

export default Headlines