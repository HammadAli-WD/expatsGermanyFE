import React from "react";
import { Link, withRouter} from 'react-router-dom';
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { FiUpload } from 'react-icons/fi';
import { GrFacebook, GrLinkedin } from 'react-icons/gr';
//import './index.css'
class Login extends React.Component {
  state = {
    userCredentials : {
      email: "" ,
      password: ""
    },
    isAuthenticated : false
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
      this.state.isAuthenticated = true
      this.props.history.push("/join")
  
    }
  render() {
    return(
      
    <Container>
      <Row>
      <Col className="col-md-offset-5 col-md-4 text-center">
      <h1 className='text-white'>Unique Login Form</h1>
      <div className="form-login" onSubmit={this.login}><br></br>
      
            <Form.Group >
              <Form.Label >Email address</Form.Label>
              <Form.Control 
              className="form-control input-sm chat-input"
              id="inlineFormInputName2"
              placeholder="Email"
              type="email" 
                name="email" 
                value={this.state.email} 
                onChange={(e) => this.setEmail(e.target.value)} 
              />              
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label >Password</Form.Label>
              <Form.Control 
              className="form-control input-sm chat-input"
              id="inlineFormInputName2"
              placeholder="Password"
              type="password" 
                name="password" 
                value={this.state.password} 
                onChange={(e) => this.setPassword(e.target.value)}
                />
            </Form.Group>           
            <Button className="mb-2" variant="primary" type="submit">
              Submit
            </Button>
            <div className='logins'>
                <a
                  href={
                    'http://localhost:3005/user/auth/fbSignIn'
                  }
                >
                  <div className='LoginButtons'>
                    <GrFacebook className='mr-2' /> Facebook
                  </div>
                </a>
                <a
                  href={
                    'http://localhost:3005/user/auth/LinkedIn'
                  }
                >
                  <div className='LoginButtons'>
                    <GrLinkedin className='mr-2' /> Linkedin
                  </div>
                </a>
                <a> <Link to="/signUp">Create new account</Link> </a>
              </div>
          </div>
    </Col></Row></Container>
      
          
      
    )    
    }    
    }


export default withRouter(Login);
