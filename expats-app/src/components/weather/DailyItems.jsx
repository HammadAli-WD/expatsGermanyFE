import React from 'react';
import styled from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap'

const WeatherIcon = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`
const Wrapper = styled.div`

flex-shrink: 0;
  
  padding: 0px;
  margin: 0px;
  border-radius: 6px;
  background-color: #000000;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`
const Text = styled.span`
  color: ${({ color }) => color || '#FFF'};
  display: block;
  padding: ${({ padding }) => padding || '2px'};
  margin: ${({ margin }) => margin || '2px'};
  font-size: ${({ fontSize }) => fontSize || '12px'};
  text-align: ${({ align }) => align || 'left'};
  &::first-letter {
    text-transform: capitalize;
  }
  
 
`;
function  ForecastItem({today, city, image, todaysunrise, todaysunset, todaytemp, todaydescription})  {
    const iconUrl = `https://openweathermap.org/img/w/${image}.png`

  return (
      <Container fluid>    
               
          <Text weight="800" align='center' color='#008000' ><h4>{city}</h4></Text>
          <Text fontSize="10px" align='center' >{today}</Text>
          <Row> 
            <Col sm={4}> 
            <Text fontSize="10px">Sunrise: {todaysunrise} AM</Text>
          <Text fontSize="10px">Sunset: {todaysunset} PM</Text>
          </Col>
          <Col sm={4}> 
          <Text fontSize="16px" color='#0000FF' > {todaydescription} </Text>
          </Col>  
          <Col sm={4}>          
                <WeatherIcon src={iconUrl}/>
                <Text align="center" color='#008000'>{todaytemp}&deg;C</Text>                
          
          </Col> </Row>
                 
             
          </Container>   
      
  );
};

export default ForecastItem;