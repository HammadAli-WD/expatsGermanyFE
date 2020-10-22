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
      if (resp.ok){
        this.state.isAuthenticated = true
      this.props.history.push("/join")
      }
      
  
    }
  render() {
    return(
      <Container styles={{ backgroundImage:`url(https://i.redd.it/o8dlfk93azs31.jpg)` }}>
        <Row>
          <Col className= 'text-center'>
          <h1 className='text-white'>Unique Login Form</h1>
          <Form onSubmit={this.login}>
            
              
              <Form.Control 
              className="input-sm chat-input"
              id="userName"
              placeholder="Email"
              type="email" 
                name="email" 
                value={this.state.email} 
                onChange={(e) => this.setEmail(e.target.value)} 
              />              
            

           
              
              <Form.Control 
              className="input-sm chat-input"
              id="userPassword"
              placeholder="Password"
              type="password" 
                name="password" 
                value={this.state.password} 
                onChange={(e) => this.setPassword(e.target.value)}
                />
                     
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
          </Form>
          
          </Col>
        </Row>
      </Container>
          
          
      
    )    
    }    
    }


export default withRouter(Login);
