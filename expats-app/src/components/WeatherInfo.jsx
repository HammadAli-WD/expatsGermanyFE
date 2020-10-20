import React from "react";
import {Carousel, Spinner} from 'react-bootstrap'
import useFetch from "../HOC/UseFetch"

function WeatherInfo() {
    
  const [response, loading, hasError] = useFetch("http://localhost:3005/weather/forecast") 

    return (
       <>
       {console.log("data", response)}
    {loading ? 
    <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>:
    (hasError?<div>Error...</div>:
    (
        
              <Carousel>
            {response.map(({lat, daily, lon}, i)=>
            <Carousel.Item key={i}>
            
            
            <h1>{lat}</h1>
            <h1>{lon}</h1>
          
            
            {daily.map((fc, j) => <p key={j}>{fc.clouds}</p>)}
           
           
        </Carousel.Item>
            
            )}
        
        
    </Carousel>
    ))}    
     
  
</>
)}

export default WeatherInfo

 