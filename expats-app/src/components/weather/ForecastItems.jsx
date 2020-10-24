import React from 'react';
import styled from 'styled-components'

const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  position: relative;
  top: 20px;
`;


const Wrapper = styled.div`

flex-shrink: 0;
  flex-basis: 14%;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`
const WeatherIcon = styled.img`
  display: block;
  height: 25px;
  width: 25px;
  margin: 0 auto;
`
const ForecastWrapper = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
`;
const Text = styled.span`
  color: ${({ color }) => color || '#000000'};
  display: block;
  font-size: ${({ fontSize }) => fontSize || '10px'};
  text-align: ${({ align }) => align || 'left'};
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `} 
`;
const Forecast = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: lightgray #ffffff;
  scrollbar-width: thin;
  margin-top: 20px;
  padding-bottom: 20px;
  
`;
function  ForecastItem({icon, day, temp})  {
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`
  return (
    
            <Wrapper>     
          <Text align="center">{day}</Text> 
          <WeatherIcon src={iconUrl}/>        
          <Text align="center" weight="400">{temp}&deg;C</Text>      
          </Wrapper>
      
  );
};

export default ForecastItem;