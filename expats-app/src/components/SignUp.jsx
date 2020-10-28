import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import { FiUpload } from 'react-icons/fi';

//const styled = styled.default
//const { css } = styled
const apiKey = "http://localhost:3005";

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
    	console.log(props.error)
    	return props.error ? "red" : "none"
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




class SignUp extends Component {
  state = {
    photo: null,
    profile: {
    name: '',
    email: '',
    password: '',
    surname:"",   
    username: "", 
    error: false
    },   
    
  };

  handleChangeProfile = (e) => {
    const profile = this.state.profile;
    profile[e.currentTarget.id] = e.currentTarget.value;
    this.setState({
      profile,
    });
  };

  addNewProfile = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      this.setState({
        error: true
      });
      return;
    }
    this.setState({
      error: false
    });
   
    const resp = await fetch(apiKey + '/user/Register', {
      method: 'POST',
      body: JSON.stringify({
        ...this.state.profile
      }),
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    const photo = new FormData();
    photo.append('profile', this.state.photo);
    const id = await resp.json();

    await fetch(apiKey + '/user/' + this.state.profile.username + '/upload', {
      method: 'POST',
      body: photo,
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });

    this.props.history.push("/")
  };

  addPhoto = (e) => {
    const photo = e.target.files[0];

    this.setState({
      photo,
    });
  };

  render() {
    return (
      <CardWrapper>
        <CardHeader>
          <CardHeading>New User</CardHeading>
        </CardHeader>
        
        <CardBody>
          <StyledForm 
          onSubmit={this.addNewProfile}
          error={this.state.error}          
          >
          <CardFieldset>
            <CardInput
              autoFocus
              id='name'
              placeholder='Name'
              type='text'
              value={this.state.profile.name}
              onChange={(e) => this.handleChangeProfile(e)}
              required
            />
          </CardFieldset>
          
          <CardFieldset>
            <CardInput
             
             id='surname'
             placeholder='Surname'
             type='text'
             value={this.state.profile.surname}
             onChange={(e) => this.handleChangeProfile(e)}
              required
            />
          </CardFieldset>          
          <CardFieldset>
            <CardInput
              
              id='username'
              placeholder='Username'
              type='text'
              value={this.state.profile.username}
              onChange={(e) => this.handleChangeProfile(e)}
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
             value={this.state.profile.email}
             onChange={(e) => this.handleChangeProfile(e)}
             placeholder='Email'
             type='text'
             id='email'
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
               value={this.state.profile.password}
               onChange={(e) => this.handleChangeProfile(e)}
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
            <CardInput
              
              type="file"
              id='profilePhoto'
              placeholder='Image Upload'
              onChange={(e) => this.addPhoto(e)}
              accept='image/*'
          ></CardInput>            
          </CardFieldset>
          
          <CardFieldset>
            <CardButton block type='submit'>Sign Up</CardButton>
          </CardFieldset>
          </StyledForm> 
          
          <CardFieldset>
            <CardLink>I already have an account</CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>



      /* <Container id='logingPage' className='d-flex justify-content-center '>
        <div style={{ marginTop: '35vh' }}>
                <Container className='d-flex justify-content-center'>
                  <Row>
                    <Col className='d-flex align-items-center mr-5'>
                      <label htmlFor='profilePhoto'>
                        <FiUpload
                          style={{ fontSize: '55px', color: '#0073B1' }}
                        />
                      </label>
                    </Col>
                    <form onSubmit={this.addNewProfile}>
                      <input
                        style={{ display: 'none' }}
                         placeholder='Username'
                        type='file'
                        id='profilePhoto'
                        profile='file'
                        onChange={(e) => this.addPhoto(e)}
                        accept='image/*'
                      />
                      <Container>
                        <Image
                          src='Something'
                          className='mb-3'
                          style={{ width: '150px' }}
                        />
                        <Row>
                          <Col>
                            <FormGroup>
                              <label>Name</label>
                              <FormControl
                                autoFocus
                                id='name'
                                type='text'
                                value={this.state.profile.name}
                                onChange={(e) => this.handleChangeProfile(e)}
                              />
                            </FormGroup>
                            <FormGroup>
                              <label>Surname</label>
                              <FormControl
                                autoFocus
                                id='surname'
                                type='text'
                                value={this.state.profile.surname}
                                onChange={(e) => this.handleChangeProfile(e)}
                              />
                            </FormGroup>
                            <FormGroup>
                              <label>username</label>
                              <FormControl
                                autoFocus
                                id='username'
                                type='text'
                                value={this.state.profile.username}
                                onChange={(e) => this.handleChangeProfile(e)}
                              />
                            </FormGroup>
                            <FormGroup>
                              <label>Email</label>
                              <FormControl
                                value={this.state.profile.email}
                                onChange={(e) => this.handleChangeProfile(e)}
                                type='text'
                                id='email'
                              />
                            </FormGroup>
                            <FormGroup>
                              <label>Password</label>
                              <FormControl
                                value={this.state.profile.password}
                                onChange={(e) => this.handleChangeProfile(e)}
                                type='password'
                                id='password'
                              />
                            </FormGroup>
                          </Col>                         
                        </Row>
                        <Button block type='submit'>
                          Add Info
                        </Button>
                      </Container>
                    </form>
                  </Row>
                </Container>
              </div>
          
        
      </Container> */
    );
  }
}

export default SignUp;