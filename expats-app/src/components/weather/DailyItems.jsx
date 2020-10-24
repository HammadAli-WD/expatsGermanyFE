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
  margin: 0 0px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.5);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`
const Text = styled.span`
  color: ${({ color }) => color || '#000000'};
  display: block;
  padding: ${({ padding }) => padding || '2px'};
  margin: ${({ margin }) => margin || '2px'};
  font-size: ${({ fontSize }) => fontSize || '12px'};
  text-align: ${({ align }) => align || 'left'};
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `} 
`;
function  ForecastItem({today, city, image, todaysunrise, todaysunset, todaytemp})  {
    const iconUrl = `https://openweathermap.org/img/w/${image}.png`

  return (
      <Container fluid>    
        <Row>
            <Col sm={2} className="p-0 m-0">
                <Wrapper>
                <WeatherIcon src={iconUrl}/>
                <Text align="center">{todaytemp}&deg;C</Text>
                </Wrapper>
            </Col>
        
          <Col sm={10} className="p-0 m-0"><Text weight="800"><h4>{city}</h4></Text>
          <Text fontSize="10px" >{today}</Text>
          <Text fontSize="10px">{todaysunrise}</Text>
          <Text fontSize="10px">{todaysunset}</Text></Col>         
          
          </Row>   
          </Container>   
      
  );
};

export default ForecastItem;