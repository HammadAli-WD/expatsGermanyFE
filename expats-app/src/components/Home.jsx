import React from "react";
import Covid from "./Covid";
import HackerNews from "./HackerNews";
import Headlines from "./Headlines";
import Login from "./Login"
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap'
import WeatherInfo from "./WeatherInfo";


function Home() { 
 
    return (
        <>
        <Container fluid>
        <Row>
            <Col sm={3} ><Covid /> <HackerNews /> <WeatherInfo /></Col>
            <Col sm={6}>  <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
            </Jumbotron>  
                </Col>
            <Col sm={3}> <Headlines /> <Login />   </Col>
            
        </Row>
        </Container>
        
        
        
              
         </>

    )

    
}

export default Home