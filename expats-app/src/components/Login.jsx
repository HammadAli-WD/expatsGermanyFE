import React from "react";
import { withRouter} from 'react-router-dom';
import { Form, Button, Container, Row, Col } from "react-bootstrap"

class Login extends React.Component {
  state = {
    userCredentials : {
      email: "" ,
      password: ""
    },
  };
setEmail = (e) => {
  const userCredentials = this.state.userCredentials
  userCredentials.email = e
  this.setState({
    userCredentials
  }) 
}
setPassword = (e) => {
  const userCredentials = this.state.userCredentials
  userCredentials.password = e
  this.setState({
    userCredentials
  })

}  
login = (e) => {
    e.preventDefault()
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
   this.props.history.push("/chat")
    }
  render() {
    return(
      <Container>      
        <Row>
          <Col>
          <Form onSubmit={this.login}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" 
                name="email" 
                value={this.state.email} 
                onChange={(e) => this.setEmail(e.target.value)} 
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" 
                name="password" 
                value={this.state.password} 
                onChange={(e) => this.setPassword(e.target.value)}
                />
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


export default withRouter(Login);
