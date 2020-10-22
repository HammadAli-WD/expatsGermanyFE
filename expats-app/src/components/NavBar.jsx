import React from "react";
import { Navbar, Nav, Form, Button, ListGroup } from "react-bootstrap";
import { Link, withRouter} from 'react-router-dom';

class NavBar extends React.Component {
    render(){
        return(
            <Navbar bg="light" variant="light" expand="lg" >
				<Navbar.Brand href="#home">Home</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						
					</Nav>
					<Form inline>
                    <ListGroup  horizontal>
                        <ListGroup.Item><a> <Link to="/signUp">Create new account</Link> </a> </ListGroup.Item>
                        <ListGroup.Item><Link to="/login">Sign Up</Link></ListGroup.Item>
                    </ListGroup >
					</Form>
				</Navbar.Collapse>
			</Navbar>
           				
            /* <Navbar bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                 <Form inline>
                <Login/>
                </Form> 
                </Navbar.Collapse>
            </Navbar> */
        )
    }
}
 export default withRouter(NavBar);
