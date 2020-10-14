import React from "react";
import Covid from "./Covid";
import HackerNews from "./HackerNews";
import Headlines from "./Headlines";
import Login from "./Login"
import {Container, Row, Col} from 'react-bootstrap'


function Home() { 
 
    return (
        <>
        <Container fluid>
        <Row>
            <Col sm={3} ><Covid /> <HackerNews /></Col>
            <Col sm={6}> <Headlines />  
                </Col>
            <Col sm={3}><Login />  </Col>
            
        </Row>
        </Container>
        
        
        
              
         </>

    )

    
}

export default Home