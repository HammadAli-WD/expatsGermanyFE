import React, { useEffect, useState } from "react";
import {Carousel, Spinner} from 'react-bootstrap'
import useFetch from "../HOC/UseFetch"
import ForecastItem from "./ForecastItem";
import moment from "moment";
import Cities from "./Cities";

function WeatherInfo() {
    
  const [response, loading, hasError] = useFetch("http://localhost:3005/weather/forecast") 
  const [cities, setCities] = useState([]);
  const url = "http://localhost:3005/weather/city"
  
    useEffect(() => {
     
      fetch(url)
      .then(resp => resp.json())
      .then(data => {
          //console.log('Hacker News',data)
      setCities(data)
     
          
      })
          
  }, [])
    
  
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
                               
                {cities.map((city, k) => 
                <h1>{city.name} </h1>
                )}
            {response.map(({lat, daily, lon}, i)=>
            <>
            
            
            <h1>{lat}</h1>
            <h1>{lon}</h1>
            {/* <img
              style={{ width: 100, objectFit: "cover" }}
              src={
                "https://png.pngtree.com/element_our/md/20180627/md_5b33491c79ac0.jpg"
              }
            /> */}
          
            
            {daily.slice(0,5).map((item, j) => <ForecastItem
             key={j}
              day={moment.unix(item.dt).format("DD MM YYYY")}
              icon = {`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              high={item.temp.max}
              low={item.temp.min}
              weatherCode={item.weather[0].description}
              main={item.weather.wind_speed}
            />)}
           
           
        </>
            
            )}
        
       
    </Carousel>
    ))}    
     
  
</>
)}

export default WeatherInfo

 