import React from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap"
class Login extends React.Component {
  state = {
    userCredentials : {
      email: '',
      password: ''
    },
  };

  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = async() => {
      let resp = await fetch("http://localhost:3005/user/signIn", {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(this.state.userCredentials),
        headers: new Headers({
          "content-Type": "application/json"
        })
      })
    if (resp.ok) {
      console.log(resp)
    }
    }
  render() {
    return(
      <Container>
      
        <Row>
          <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Col>
        </Row>
      </Container>
      
    )    
    }    
    }


export default Login;
