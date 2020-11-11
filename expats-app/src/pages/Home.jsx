import React, { Component } from 'react'
import Covid from "../components/covid/Covid";
import Headlines from "../components/headlines/Headlines";
import { Container, Row, Col, Jumbotron, Button, Fade } from 'react-bootstrap'
import WeatherInfo from "../components/weather/WeatherInfo";
import HackerNews from "../components/hackerNews/HackerNews";
import NavBar from "../components/navbar/NavBar";
import GlobalStyles from '../styles/GlobalStyles'
import FadeIn from './FadeIn';
import Topheader from '../components/header/Topheader';
import Info from '../components/generalInfo/Info';

class Home extends Component {


  state = {
    navbarOpen: false,
    username: '',
    image: ''
  };


  componentDidMount = () => {
    try {

      fetch("http://localhost:3005/user/me", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then(data => {
          console.log('username', data.username)
          console.log('image', data.image)
          this.setState({
            username: data.username
          })
        })
      // .then(setUser),



    } catch {
      console.log("data fetch error")
    }

  }
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <>
        <NavBar navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar} link={this.state.username ? '/logout' : "/login"} name={this.state.username ? 'sign out' : "sign in"} />

        <Topheader />

        <Container fluid className="mx-auto my-5">

          <Row>

            <Col sm={8}> <FadeIn><Info /></FadeIn>
            </Col>

            <Col sm={4}>
              <FadeIn> <Covid /> </FadeIn>

              <FadeIn> <WeatherInfo /> </FadeIn>
              <Row className="mx-3  my-auto" >
                <FadeIn> <HackerNews /> </FadeIn>


                <FadeIn>  <Headlines /> </FadeIn>
              </Row>
            </Col>

          </Row>
        </Container>




      </>

    )
  }


}

export default Home