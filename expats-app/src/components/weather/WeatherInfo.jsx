import React, { useEffect, useState } from "react";
import {Carousel, Container, Row, Spinner, Col, CardGroup,Card} from 'react-bootstrap'
import useFetch from "../../HOC/UseFetch"
import ForecastItem from "./ForecastItem";
import moment from "moment";
const styles = {
  card: {
    backgroundColor: '#B7E0F2',
    borderRadius: 55,
    padding: '3rem'
  },
  cardImage: {
    objectFit: 'cover',
    borderRadius: 55
  }
}
function WeatherInfo() {
    
  const [response, loading, hasError] = useFetch("http://localhost:3005/weather/forecast") 
  //const url = "http://localhost:3005/weather/city"


  
    /* useEffect(() => {
     
      fetch(url)
      .then(resp => resp.json())
      .then(data => {
          //console.log('Hacker News',data)
      setCities(data)
     
          
      })
          
  }, []) */
    
  
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
            
            
            <Carousel.Item>
            <h1>{()=> {
                      const A = {lat}
                      const B = {lon}
                      if (A === 52.44 & B === 13.58 ) {
                        return "Berlin";
                    } else if (A === 48.14 & B === 11.58 ) {
                      return "Munich";
                    }  else {
                      return "Nothing";
                    }
                    }}</h1>
            
            {/* <img
              style={{ width: 100, objectFit: "cover" }}
              src={
                "https://png.pngtree.com/element_our/md/20180627/md_5b33491c79ac0.jpg"
              }
            /> */}
          
          <Container fluid className={"no-gutters mx-0 px-0"}>
          <CardGroup className="m-5 d-block">
            <Card className="m-5 border-0 shadow" style={styles.card}>
              <Row noGutters={true}>
            {daily.slice(0,5).map((item, j) => 
            
                <Col sm={"auto"}>
                <ForecastItem
             key={j}
              day={moment.unix(item.dt).format("DD MM YYYY")}
              icon = {`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              high={item.temp.max}
              low={item.temp.min}
              weatherCode={item.weather[0].description}
              main={item.weather.wind_speed}
            />
                </Col>
              
            )}
            </Row>
            </Card>
      </CardGroup>
            </Container>
           </Carousel.Item>
           
        
            
            )}
        
        
    </Carousel>
    ))}    
     
  
</>
)}

export default WeatherInfo

 