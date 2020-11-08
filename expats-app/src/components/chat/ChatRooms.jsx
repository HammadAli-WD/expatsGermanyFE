import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import { Button, Media, Modal } from "react-bootstrap"
import styled from "styled-components";
import { Link, withRouter } from 'react-router-dom';
const connOpt = {
  transports: ["websocket"],
}
const { accesstoken } = sessionStorage;
let socket = io("http://localhost:3005", connOpt)

function ChatRooms(props) {
  const [username, setUsername] = React.useState(null)
  const [rooms, setRooms] = React.useState([])
  const [room, setRoom] = React.useState(null)

  const [showModal, setShowModal] = React.useState(true)
  useEffect(() => {
    (async () => {
      try {
        await Promise.all([
          fetch("http://localhost:3005/chatRooms", {
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



  return (
    <>



      {rooms.map((room, i) => (

        <Media as="li">
          <img
            width={64}
            height={64}
            className="mr-3"
            src={room.image}
            alt="Generic placeholder"
          />

          <Media.Body>

            <li key={i} onClick={async () => {
              await props.history.push(`/rooms/${room.name}`)
            }}>
              <strong  >{room.name}</strong>
            </li>
          </Media.Body>
        </Media>
      ))}

    </>
  )
}

export default withRouter(ChatRooms);