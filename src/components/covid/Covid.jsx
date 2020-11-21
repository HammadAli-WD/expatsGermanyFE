import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { Card } from 'react-bootstrap';
import styled from 'styled-components'
//import './style.css'

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
});

const BigTitle = styled.h2({
  textTransform: "uppercase",
  fontFamily: "Helvetica",
  color: "white"
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
  color: "#FF0000"
});

const Paragraph = styled.p`
  color: ${({ color }) => color || '#000000'};
  display: block;
  transform: translate3d(0,50px,0);
  transition: transform 350ms ease
  padding: ${({ padding }) => padding || '2px'};
  margin: ${({ margin }) => margin || '2px'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  text-align: ${({ align }) => align || 'left'};
  &::first-letter {
    text-transform: capitalize;
  }
  
 
`;
/* const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
  color: "#000000",
}); */

const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  marginLeft: '15px',

  color: "#FFF",
  position: "relative",
  maxWidth: "445px",
  height: "250px",
  cursor: "pointer",
  backgroundImage: "url(https://cdn.prod.www.spiegel.de/images/dd9718d7-8ed0-4cc4-89ba-bfee1322516b_w948_r1.77_fpx45_fpy24.jpg)",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
  '@media(max-width: 700px)': {
    maxWidth: "300px",
    marginTop: '10px',
  }

});

const CTA = styled.a({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});
const url = process.env.REACT_APP_API_HEROKU

function Covid() {
  const [cases, setCases] = useState({});
  const [lastday, setLastday] = useState({});
  const [caseFatailityRate, setCaseFatailityRate] = useState({});
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        await Promise.all([
          fetch(url + '/covid/germanyCases')
            .then((response) => response.json())
            .then(setCases),
          fetch(url + '/covid/lastData')
            .then((response) => response.json())
            .then(setLastday),
          fetch(url + '/covid/CFR')
            .then((response) => response.json())
            .then(setCaseFatailityRate)
        ])
        setLoading(false)
      } catch {
        console.log("data fetch error")
        setHasError(true)
        setLoading(false)
      }
    })()
  }, []);

  /* useEffect(() => {
      let num = cases.TotalConfirmed
    let number =  Math.floor(Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k')
    setTbg(number);
 }, []); */

  return (
    <>
      {console.log('cases', cases)}
      {loading ? <div>Loading...</div> :
        hasError ? <div>Error</div> :
          (



            <Background>
              <DisplayOver>
                <BigTitle>COVID-19 Info Desk!</BigTitle>
                <Hover>
                  <SubTitle>{cases.Country}!</SubTitle>
                  <Paragraph color='#FFFFFF'>
                    New Cases: {cases.NewConfirmed} <br></br>
              NewRecovered: {cases.NewRecovered} <br></br>
              New Deaths:{cases.NewDeaths} <br></br>
              Case Fatality Rate: {Math.floor(caseFatailityRate.caseFatalityRate * 1) / 1} %
              </Paragraph>

                  <CTA><a href="https://news.google.com/covid19/map?hl=de&mid=%2Fm%2F0345h&gl=DE&ceid=DE%3Ade" target="_blank">View More +</a> </CTA>
                </Hover>
              </DisplayOver>
            </Background>


            /* <div class="card">
    <div class="card-image"></div>
    <div class="card-text">
      
      <h2>{cases.Country}</h2> <span class="date">4 days ago</span>
      <p>New Cases: {cases.NewConfirmed}</p>
      <p>NewRecovered: {cases.NewRecovered}</p>
      <p>New Deaths:{cases.NewDeaths}</p>
      <p>New Cases: Case Fatality Rate: {Math.floor(caseFatailityRate.caseFatalityRate * 1) / 1} % </p>
      <p>New Cases: {cases.NewConfirmed}</p>
    </div>
    
  </div> */

          )}

    </>

  )


}

export default Covid