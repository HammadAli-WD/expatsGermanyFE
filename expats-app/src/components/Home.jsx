import React from "react";
import Covid from "./Covid";
import Headlines from "./Headlines";
import Login from "./login/Login"
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap'
import WeatherInfo from "./weather/WeatherInfo";
import HackerNews from "./hackerNews/HackerNews";
import NavBar from "./NavBar";

function Home() { 
 
    return (
        <>
        <NavBar />
        <Container fluid>
        <HackerNews />
        <Row>        
            <Col sm={3} ><Covid />   </Col>
            <Col sm={6}>  <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
            </Jumbotron> <WeatherInfo /> 
                </Col>
            <Col sm={3}> <Headlines /> <Login />   </Col>
            
        </Row>
        </Container>
        
        
        
              
         </>

    )

    
}

export default Home