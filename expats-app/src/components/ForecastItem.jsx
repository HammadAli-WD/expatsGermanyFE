import React from 'react';



function  ForecastItem(props)  {
  return (
    <div>
      <h6>{props.day}</h6>
      <img src={props.icon} class="img-fluid" alt="Responsive image"></img>
      <h6>{props.weatherCode}</h6>
      <h6>{props.high}</h6>
      <h6>{props.low}</h6>
      <h6>{props.main}</h6>
      
    </div>
  );
};

export default ForecastItem;