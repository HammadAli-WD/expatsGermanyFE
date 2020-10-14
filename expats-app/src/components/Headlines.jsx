import React from "react";
import {Carousel, Spinner} from 'react-bootstrap'
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
        <Carousel>
            {response.map((tn,i)=>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={tn.image.url}
            alt="First slide"
            />
            <Carousel.Caption>
            <h2>Bing News Headlines</h2>
            <h3><Link to={{ pathname: tn.webSearchUrl }} target="_blank" >{tn.name}</Link></h3>
            <p>{tn.query.text}</p>
            </Carousel.Caption>
        </Carousel.Item>
            
            )}
        
        
    </Carousel>      
    
      
    ))}    
     
  
</>
)}

export default Headlines