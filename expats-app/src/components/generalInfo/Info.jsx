import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const DisplayOver = styled.div({
  
  zIndex: 2,
  transition: " 350ms ease",
  
});

const BigTitle = styled.h2({
  textTransform: "uppercase",
  fontFamily: "Helvetica",
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p`
  color: ${({ color }) => color || '#000000'};
  display: block;
  transform: translate3d(0,50px,0);
  transition: transform 350ms ease
  padding: ${({ padding }) => padding || '2px'};
  margin: ${({ margin }) => margin || '2px'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
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
  
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

const CTA = styled.a({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});

function Info() {
     
    return (
        <>
           <h3>Burecracy in Germany for Expatriates</h3>
        <Row >
        
         <Col>
          <Card bg="dark" text="white" >
          <Card.Img variant="top" src="https://germany-simplified.com/wp-content/uploads/2020/10/Germany_Simplified_Blog_2WorkVisa.png" />
           <Background>
            <Card.Header><Card.Link href="https://www.germany-visa.org/application-process/" target="_blank">Visa Application </Card.Link></Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                        Information about the visa requirements and application process in Germany...
                    
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.schengenvisainfo.com/germany-visa/" target="_blank">View More++</Card.Link></Hover>
                </Card.Body>
                </Background>
            </Card>
         </Col>
         <Col>
            <Card bg="dark" text="white" >
            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5df3b3298a8734580f1e0036/1582133993349-L21BGYHF93IFR0QZLC63/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg" />
            <Background>
            <Card.Header><Card.Link href="https://service.berlin.de/dienstleistung/325475/en/" target="_blank">Residence Permit</Card.Link></Card.Header>
            <Card.Body>                
                
                    <Card.Text>
                    Residence permit for foreigners with a long-term residence in an EU member state...
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.germany.info/us-en/service/visa/residence-visa/922288" target="_blank">View More++</Card.Link></Hover>
            </Card.Body>
            </Background>
            </Card>
         </Col>
         <Col >
          <Card bg="dark" text="white" >
          <Card.Img variant="top" src="https://www.thelocal.de/userdata/images/article/8a1a06ee18406d0e0d81fb55e448663dc6589a88757e1d80a74e86e99f6fc98a.jpg" />
            <Background>
            <Card.Header><Card.Link href="https://nomadandinlove.com/anmeldung-english-guide/" target="_blank">Anmeldung in Germany</Card.Link></Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                    The Anmeldung is Germany is registering your current residence ...
                    
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.settle-in-berlin.com/anmeldung/" target="_blank">View More++</Card.Link></Hover>
                </Card.Body>
                </Background>
            </Card>
         </Col>
         
        </Row>
        <br></br>
        <h3>Learning German</h3>
        <Row >
        <Col >
          <Card bg="dark" text="white" >
          <Card.Img variant="top" src="https://static.dw.com/image/15703236_301.jpg" />
            <Background>
            <Card.Header><Card.Link href="https://www.dw.com/de/deutsch-lernen/radio-d-teil-1/s-9604" target="_blank">A1 | Radio D</Card.Link></Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                    Niveaustufen: A1 <br></br>                   
                    Sprachen: Deutsch | Englisch
                    
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.dw.com/de/deutsch-lernen/s-2055" target="_blank">View More++</Card.Link></Hover>
                </Card.Body>
                </Background>
            </Card>
         </Col>
        <Col >
          <Card bg="dark" text="white" >
          <Card.Img variant="top" src="https://static.dw.com/image/16366399_301.jpg" />
            <Background>
            <Card.Header><Card.Link href="https://www.dw.com/de/deutsch-lernen/harry/s-13219" target="_blank">A1, A2, B1 | Harry</Card.Link></Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                    Niveaustufe: A1, A2, B1                    
                    <br></br>                   
                    Sprachen: Deutsch | Englisch
                    
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.dw.com/de/deutsch-lernen/s-2055" target="_blank">View More++</Card.Link></Hover>
                </Card.Body>
                </Background>
            </Card>
         </Col>         
         <Col >
          <Card bg="dark" text="white" >
          <Card.Img variant="top" src="https://static.dw.com/image/37307244_302.jpg" />
            <Background>
            <Card.Header><Card.Link href="https://www.dw.com/de/deutsch-lernen/deutsch-mobil/s-40884569" target="_blank">Deutsch mobil</Card.Link></Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                    Niveaustufen: A1, A2, B1, B1+                   
                    <br></br>                   
                    Sprachen: Deutsch | Englisch
                    
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.dw.com/de/deutsch-lernen/s-2055" target="_blank">View More++</Card.Link></Hover>
                </Card.Body>
                </Background>
            </Card>
         </Col>
         
        </Row>
        <br></br>
        <h3>Burecracy in Germany for Expatriates</h3>
        <Row >
        
         <Col>
          <Card bg="dark" text="white" >
           <Background>
            <Card.Header><Card.Link href="https://www.germany-visa.org/application-process/" target="_blank">Visa Application </Card.Link></Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                        Information about the visa rewuirments and application process in Germany...
                    
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.schengenvisainfo.com/germany-visa/" target="_blank">View More++</Card.Link></Hover>
                </Card.Body>
                </Background>
            </Card>
         </Col>
         <Col>
            <Card bg="dark" text="white" >
            <Background>
            <Card.Header><Card.Link href="https://service.berlin.de/dienstleistung/325475/en/" target="_blank">Residence Permit</Card.Link></Card.Header>
            <Card.Body>                
                
                    <Card.Text>
                    Residence permit for foreigners with a long-term residence in an EU member state...
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.germany.info/us-en/service/visa/residence-visa/922288" target="_blank">View More++</Card.Link></Hover>
            </Card.Body>
            </Background>
            </Card>
         </Col>
         <Col >
          <Card bg="dark" text="white" >
            <Background>
            <Card.Header><Card.Link href="https://nomadandinlove.com/anmeldung-english-guide/" target="_blank">Anmeldung in Germany</Card.Link></Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                    The Anmeldung is Germany is registering your current residence ...
                    
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.settle-in-berlin.com/anmeldung/" target="_blank">View More++</Card.Link></Hover>
                </Card.Body>
                </Background>
            </Card>
         </Col>
         
        </Row>

          
           


         
          
          
      
         </>

    )

    
}

export default Info