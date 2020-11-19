import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import { FiUpload } from 'react-icons/fi';
import NavBar from '../navbar/NavBar';
import { Link, withRouter } from 'react-router-dom';
//const styled = styled.default
//const { css } = styled
const url = process.env.REACT_APP_API_HEROKU

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

    profile: {
      photo: null,
      name: '',
      email: '',
      password: '',
      surname: "",
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

    const resp = await fetch(url + '/user/Register', {
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
    photo.append('profile', this.state.profile.photo);
    const id = await resp.json();

    /* await fetch(url + '/user/' + this.state.profile.username + '/upload', {
      method: 'POST',
      body: photo,
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }); */

    this.props.history.push("/login")
  };

  bufferToBase64(buf) {
    var binstr = Array.prototype.map
      .call(buf, function (ch) {
        return String.fromCharCode(ch);
      })
      .join("");
    return btoa(binstr);
  }
  addPhoto = (e) => {
    const buf = e.target.files[0];
    const photo = this.bufferToBase64(buf);
    this.setState({
      photo,
    });
  };



  render() {
    return (
      <>
        <NavBar link="/login" name='Sign In' />
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
              <CardLink><Link to="/login">I already have an account</Link></CardLink>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </>



    );
  }
}

export default SignUp;