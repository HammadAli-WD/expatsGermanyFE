import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Media, Image, Container } from 'react-bootstrap';
import styled from 'styled-components'
import FadeIn from "../../pages/FadeIn";
const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
  
});

/* const DisplayOver = styled.div({
  
  zIndex: 2,
  transition: " 350ms ease",
  
});
 */
const BigTitle = styled.h3({
  
  fontFamily: "Helvetica",
  
  transition: "transform 350ms ease",
  
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.h3`
  color: ${({ color }) => color || '#000000'};
   &: hover{
  color: ${({ color }) => color || '#FF0000'};
  text-decoration: underline;
   transform: "translate(12px, 12px)";
  transition: transform .2s ease-out;
  } ;
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
        <Container>
          <FadeIn>
        <Paragraph>Bureaucracy in Germany for Expatriates</Paragraph>
        <Row >
        
         <Col xs={12} md={4}>
          <Card bg="dark" text="white" >
              <Card.Img style={{ height: "80% !important" }} variant="top"
                src="https://germany-simplified.com/wp-content/uploads/2020/10/Germany_Simplified_Blog_2WorkVisa.png" />
           <Background>
                <Card.Header>
                  <Card.Link
                  href="https://www.germany-visa.org/application-process/" target="_blank">
                  Visa Application </Card.Link>
                </Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                        Information about the visa application process in Germany...
                    
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.schengenvisainfo.com/germany-visa/" target="_blank">View More++</Card.Link></Hover>
                </Card.Body>
                </Background>
            </Card>
         </Col>
         <Col xs={12} md={4}>
            <Card bg="dark" text="white" >
                <Card.Img style={{ height: "80% !important" }} variant="top"
                src="https://images.squarespace-cdn.com/content/v1/5df3b3298a8734580f1e0036/1582133993349-L21BGYHF93IFR0QZLC63/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg" />
            <Background>
                <Card.Header>
                  <Card.Link href="https://service.berlin.de/dienstleistung/325475/en/" target="_blank">
                    Residence Permit</Card.Link>
                </Card.Header>
                <Card.Body> 
                  <Card.Text>
                    Residence permit information for foreigners in Germany...
                  </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.germany.info/us-en/service/visa/residence-visa/922288" target="_blank">
                      View More++</Card.Link>
                  </Hover>
            </Card.Body>
            </Background>
            </Card>
         </Col>
         <Col xs={12} md={4} >
          <Card bg="dark" text="white" >
                <Card.Img style={{ height: "80% !important" }} variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZxTvZpn-fTgqd85nMf_1cyCMG7NC9wTxvg&usqp=CAU" />
            <Background>
                <Card.Header>
                  <Card.Link href="https://nomadandinlove.com/anmeldung-english-guide/" target="_blank">
                    Anmeldung in Germany
                    </Card.Link>
                </Card.Header>
                <Card.Body>                   
                    <Card.Text>
                    The Anmeldung is registering your current residence ...                    
                    </Card.Text>
                    <Hover>
                    <Card.Link href="https://www.settle-in-berlin.com/anmeldung/" target="_blank">View More++</Card.Link></Hover>
                </Card.Body>
                </Background>
            </Card>
         </Col>
         
            </Row>
          </FadeIn>
          <br></br>
          <FadeIn>
        <Paragraph>Learning German</Paragraph>
        <Row >
        <Col xs={12} md={4} >
          <Card bg="dark" text="white" >
          <Card.Img style={{height:"100%"}} variant="top" src="https://static.dw.com/image/15703236_301.jpg" />
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
        <Col xs={12} md={4} >
          <Card bg="dark" text="white" >
          <Card.Img style={{height:"100%"}} variant="top" src="https://static.dw.com/image/16366399_301.jpg" />
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
         <Col xs={12} md={4} >
          <Card bg="dark" text="white" >
          <Card.Img style={{height:"100%"}} variant="top" src="https://static.dw.com/image/37307244_302.jpg" />
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
          </FadeIn>
          <br></br>
          <FadeIn>
        <Paragraph>Life Style in Germany</Paragraph>
        <Row >        
          <Col xs={12} md={6}>
            <Media style={{ backgroundColor: "#000000", color: "#FFFFFF	" }}>
              
              <Image style={{ minHeight: "170px", maxWidth: "50%" }} 
                src="https://joinup.ec.europa.eu/sites/default/files/inline-images/0_grafik_gut_leben-600x400.png" />
                <Background >
                <Card.Header >
                  <Card.Link href="https://www.fluentu.com/blog/german/german-way-of-life/"
                    target="_blank">The German Way of Life
                    </Card.Link>
                </Card.Header>
                <Card.Body>

                  
                    <Card.Text >
                      <Card.Link style={{ color: "white" }}
                        href="https://www.fluentu.com/blog/german/german-way-of-life/"
                        target="_blank">Wish you could become German?</Card.Link>

                   
                    

                    </Card.Text>
                  
                </Card.Body>
                </Background>
              
            </Media>
         
         </Col>
          <Col xs={12} md={6}>
            <Media style={{ backgroundColor: "#000000", color: "#FFFFFF	" }}>
              <Card.Img style={{ minHeight: "50px", maxWidth: "50%" }} 
                src="https://www.selectshockey.com/wp-content/uploads/2019/11/Dresden-Frauenkirche.jpg" />

              <Background >
                <Card.Header ><Card.Link href="https://www.deutschland.de/en/topic/life/lifestyle-and-cuisine" target="_blank">Lifestyle and Cuisine</Card.Link></Card.Header>
                <Card.Body style={{ paddingTop: "2px" }}>
                
                  <Card.Text >
                    <Card.Link style={{ color: "white" }}
                      href="https://www.deutschland.de/en/topic/life/lifestyle-and-cuisine"
                      target="_blank">Current and background information on lifestyle and cuisine.</Card.Link>
                    
                    </Card.Text>
                  
                </Card.Body>
              </Background>
            </Media>

          </Col>
         
            </Row>
          </FadeIn>
        </Container> 
         </>

    )

    
}

export default Info