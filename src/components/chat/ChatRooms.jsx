import React, { useEffect, Component } from "react"
import io from "socket.io-client"
import { Image, Media } from "react-bootstrap"
import styled, { keyframes } from "styled-components";
import { Animated } from "react-animated-css";
import ParticlesBg from "particles-bg";
import { Link, withRouter } from 'react-router-dom';
import NavBar from "../navbar/NavBar";
const connOpt = {
  transports: ["websocket"],
}
const { accesstoken } = sessionStorage;
const url = process.env.REACT_APP_API_HEROKU
const socket = io(url, connOpt)

const ImageResponsive = styled.img`
 width: 210px;
 height: 120px;
@media (max-width: 702px) {
   display: none;
  }
`


function ChatRooms(props) {
  const [rooms, setRooms] = React.useState([])
  const [isVisible, setisVisible] = React.useState(true)

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([
          fetch(url + "/chatRooms", {
            method: "GET",
            credentials: "include",
          })
            .then((response) => response.json())
            .then(data => {
              console.log('rooms', data[0].name)
              setRooms(data)
            })
        ])

      } catch {
        console.log("data fetch error")
      }
    })()
  }, []);

  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [2, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [.1, 0.4],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    // emitter: "follow",
    random: 15
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      }
    });
  }


  return (
    <>
      <NavBar link='/logout' name='SignOut' />
      <ParticlesBg type="custom" config={config} bg={true} />
      <Animated animationIn="zoomInDown" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={1400} isVisible={isVisible}>
        <div style={{ overflow: 'hidden', padding: "50px 5px 15px 20px", width: '100vw', justifyContent: 'center', alignItems: 'center', maxHeight: '98vh', display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "10px 5px 15px 20px", textShadow: "1px 1px 0px #ff0000" }}>
            <h2 style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} >Welcome</h2><nobr><p>Select the group for social connection with fellow members</p></nobr>
          </div>
          {rooms.map((room, i) => (

            <Media as="li" style={{ padding: "10px 5px 15px 20px" }}>
              <ImageResponsive style={{ width: "210px", height: "120px" }} src={room.image} alt="Generic placeholder" />

              <Media.Body style={{ padding: "10px 5px 15px 20px" }}>

                <Link key={i} onClick={async () => {
                  await setisVisible(false)
                  await setTimeout(() => props.history.push(`/rooms/${room.name}`), 800);


                }}>
                  <h3 style={{ padding: "0px", margin: "0px" }}>{room.name}</h3>
                  <p style={{ padding: "0px", margin: "0px", fontStyle: "italic" }}><small>{room.description}</small></p>

                </Link>

              </Media.Body>
            </Media>
          ))}

        </div>
      </Animated>
    </>
  )
}

export default withRouter(ChatRooms);