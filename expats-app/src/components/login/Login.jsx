import React from "react";
import { Link, withRouter} from 'react-router-dom';
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { GrFacebook, GrLinkedin } from 'react-icons/gr';
import styled, { css } from 'styled-components'
import { propTypes } from "react-bootstrap/esm/Image";

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`

const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`

const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color .25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`
const StyledForm = styled.form`
  &${CardInput}:invalid {
    border-color: ${props => {
    	console.log(props)
    	return props ? "red" : "none"
    }};
  }
`;
const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props => props.big && css`
    font-size: 26px;
  `}

  ${props => props.eye && css`
    position: absolute;
    top: 8px;
    right: 0;
  `}

  ${props => props.small && css`
    font-size: 14px;
  `}
`

const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`

const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`

const CardOptionsItem = styled.li`
  &:nth-of-type(n+2) {
    margin-left: 16px;
  }
`

const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`

const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color .25s ease-in;

  &:hover {
    color: #777;
  }
`

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
      <CardWrapper>
      <CardHeader>
        <CardHeading>Log In</CardHeading>
      </CardHeader>
      
      <CardBody>
        <StyledForm 
        onSubmit={this.login}
                  
        >                
        <CardFieldset>
          <CardInput
            value={this.state.email} 
            onChange={(e) => this.setEmail(e.target.value)} 
           placeholder='Email'
           type='text'
           id='email'
            required
          />
        </CardFieldset>
        <CardFieldset>
          <CardInput
            value={this.state.password} 
            onChange={(e) => this.setPassword(e.target.value)}
             placeholder='Password'
             type='password'
             id='password'
             required              
          />
          
          <CardIcon
            onClick={this.revealPassword}
            className='fa fa-eye'
            eye
            small
          />
        </CardFieldset>        
        <CardFieldset>
          <CardButton block type='submit'>Sign In</CardButton>
        </CardFieldset>
        </StyledForm>
        <CardFieldset>
            <CardOptionsNote>Or sign in with</CardOptionsNote>
            
            <CardOptions>
              <CardOptionsItem>
              <a
                  href={
                    'http://localhost:3005/user/auth/fbSignIn'
                  }
                >
                  <div className='LoginButtons'>
                    <GrFacebook className='mr-2' /> Facebook
                  </div>
                </a>
              </CardOptionsItem>

              <CardOptionsItem>
              <a
                  href={
                    'http://localhost:3005/user/auth/LinkedIn'
                  }
                >
                  <div className='LoginButtons'>
                    <GrLinkedin className='mr-2' /> Linkedin
                  </div>
                </a>
              </CardOptionsItem>

              <CardOptionsItem>            
              <a> <Link to="/signUp">Create new account</Link> </a>
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset>
        <CardFieldset>
          <CardLink>I already have an account</CardLink>
        </CardFieldset>
      </CardBody>
    </CardWrapper>


     /*  <Container styles={{ backgroundImage:`url(https://i.redd.it/o8dlfk93azs31.jpg)` }}>
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
      </Container> */
          
          
      
    )    
    }    
    }


export default withRouter(Login);
