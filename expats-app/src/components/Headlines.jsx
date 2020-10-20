import React from "react";
import {Media, Spinner} from 'react-bootstrap'
import { Link } from "react-router-dom";
import useFetch from "../HOC/UseFetch"

function Headlines() {
    
  const [response, loading, hasError] = useFetch("http://localhost:3005/news/headlines") 

    return (
       <>
       
    {loading ? 
    <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>:
    (hasError?<div>Error...</div>:
    (

      <ul className="list-unstyled">
        <h2>Bing News Headlines</h2>
        {response.map((tn,i)=>
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
)}

export default Headlines