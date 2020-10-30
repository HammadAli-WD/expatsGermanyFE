import React, { useEffect, useState } from "react";
import {Carousel, Container, Row, Spinner, Col, CardGroup,Card} from 'react-bootstrap'
import useFetch from "../../HOC/UseFetch"
import ForecastItem from "./ForecastItems";
import moment from "moment";
import DailyItems from './DailyItems'
import styled from 'styled-components'

const WeatherIcon = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`
const Forecast = styled.div`
  position: relative;
  display: flex;
  
  overflow-y: hidden;  
  margin-top: 20px;
  padding-bottom: 20px;
  
`;
const Div = styled.div`
background: grey;
  border-radius: 5px;
  
  background-size: cover;
  background-position: center center;
  
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  &:hover {
    box-shadow: 0px 10px 10px -10px 
  }

`;

function WeatherInfo() {
    
  const [response, loading, hasError] = useFetch("http://localhost:3005/weather/forecast")
  
 
  const cities = (lat, lon) => {
    if (lat === 52.44 & lon === 13.58 ) {
      return 'Berlin Köpenick'
  } else if (lat === 48.14 & lon === 11.58 ) {
    return 'Munich';
  } else if (lat === 48.81 & lon === 9.16 ) {
    return 'Stuttgart Feuerbach';
  } else if (lat === 50.12 & lon === 8.68 ) {
    return 'Frankfurt am Main';
  } else if (lat === 53.55 & lon === 10.02 ) {
    return 'Hamburg-Mitte';
  } else {
    return 'Nothing';
  }
  }  
    return (
      
       <Div>
        {console.log("data", response)}
        {loading ? 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>:
        (hasError?<div>Error...</div>:
        (
          <Carousel style={{backgroundColor: '#000000'}}>
            {response.map(({lat, daily, lon, current}, i)=>
            <Carousel.Item>
              <DailyItems 
              key={i}
              city={cities(lat,lon)}
              image = {current.weather[0].icon}
              today = {moment.unix(current.dt).format("dddd, MMMM Do")}
              todaysunrise = {new Date(current.sunrise * 1000).toLocaleTimeString().slice(0, 4)}
              todaysunset = {new Date(current.sunset * 1000).toLocaleTimeString().slice(0, 4)}
              todaytemp = {Math.floor(current.temp * 1) / 1}
              todaydescription = {current.weather[0].description}
              todayhighestTemp = {Math.floor(current.temp * 1) / 1}
              todaylowestTemp = {Math.floor(current.temp * 1) / 1}
              todayhumidity = {current.sunset}         
              />             
            <Forecast>
              {daily.slice(1,7).map((item, j) =>
                <ForecastItem
                key={j}
                day={moment.unix(item.dt).format("ddd")}             
                icon={item.weather[0].icon}
                temp={Math.floor(item.temp.day * 1) / 1}
                />
              )}
              </Forecast> 
            </Carousel.Item>
          )}
          </Carousel>
    ))}    
     
  
</Div>
)}

export default WeatherInfo

 