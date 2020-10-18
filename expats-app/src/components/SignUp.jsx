import React, { Component } from 'react';
import {
  Container,
  FormControl,
  Button,
  FormGroup,
  Image,
  Alert,
  Row,
  Col,
} from 'react-bootstrap';

import { FiUpload } from 'react-icons/fi';


const apiKey = "http://localhost:3005";

class SignUp extends Component {
  state = {
    photo: null,
    profile: {
    name: '',
    email: '',
    password: '',
    surname:"",   
    username: ""
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
      <Container id='logingPage' className='d-flex justify-content-center '>
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
          
        
      </Container>
    );
  }
}

export default SignUp;