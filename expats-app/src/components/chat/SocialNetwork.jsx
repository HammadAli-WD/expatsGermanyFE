import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import { Modal, InputGroup, FormControl, Button } from "react-bootstrap"

const connOpt = {
  transports: ["websocket"],
}
const {accesstoken} = sessionStorage;
let socket = io("http://localhost:3005", {
    query: {accesstoken}
  }, connOpt)

function SocialNetwork() {
  const [user, setUser] = React.useState(null)
  const [members, setMembers] = React.useState(null)
  const [rooms, setRooms] = React.useState([])
  const [room, setRoom] = React.useState(null)
  const [message, setMessage] = React.useState("")
  const [messages, setMessages] = React.useState([])
  const [connectedUsers, setConnectedUsers] = React.useState([])
  const [showModal, setShowModal] = React.useState(true)
  useEffect(() => {
    (async () => {
        try {
            await Promise.all([                    
                fetch("http://localhost:3005/user/me", {
                  method: "GET",
                  credentials: "include",
                })
                .then((response) => response.json())
                .then(data => {
                  console.log('user',data.username)
                  setUser(data.username)
                })
                .then(setUser),
                fetch("http://localhost:3005/chatRooms", {
                  method: "GET",
                  credentials: "include",
                })
                .then((response) => response.json())
                .then(data => {
                  console.log('rooms',data)
                  setRooms(data)
                }) 
            ])
        } catch {
            console.log("data fetch error")
        }
    })()
}, []);   
  React.useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((messages) => messages.concat(msg))
    })
    socket.on("roomData", ({ rooms, users }) => {
      setConnectedUsers(users)
      
    })
    
    
  }, [])

  const handleMessage = (e) => {
    setMessage(e.currentTarget.value)
  }

  const sendMessage = (e) => {
    e.preventDefault()

    if (message !== "") {
      socket.emit("sendMessage", {
        rooms: room,
        message: message,
      })
      setMessage("")
    }
  }
 
  const toggleModal = () => {
    if (user !== null) {
      socket.emit("join", {
        username: members,
        room: room,
      })
      setShowModal(!showModal)
    }
  }

  return (
    <>
      <div>
        <h1>{room}</h1>
        <ul id="messages" style={{ listStyle: "none", padding: "0 2rem" }}>
          {" "}
          {connectedUsers.map((user, i) => (
            <li key={i}>
              <strong>{user.user}</strong>
            </li>
          ))}
        </ul>
        <hr></hr>
        <ul id="messages" style={{ listStyle: "none", padding: "0 2rem" }}>
          {messages.map((msg, i) => (
            <li key={i}>
              <strong>{msg.sender}</strong> {msg.text} - {msg.createdAt}
            </li>
          ))}
        </ul>
        <form
          id="chat"
          onSubmit={sendMessage}
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            display: "flex",
            padding: "1rem",
            background: "black",
          }}
        >
          <input
            autoComplete="off"
            value={message}
            onChange={handleMessage}
            style={{ flex: "1 0 auto", outline: 0 }}
            className="rounded-0 border-0"
          />
          <Button type="send" className="rounded-0">
            Send
          </Button>
        </form>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={toggleModal}
      >
        <Modal.Header>
          <Modal.Title>Set user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <ul id="messages" style={{ listStyle: "none", padding: "0 2rem" }}>
         
          {rooms.map((room, i) => (
            <li key={i} onClick={()=>{ return(setRoom(room.name), setMembers(room.members[0].username))}}>
              <strong  >{room.name}</strong>
            </li>
          ))}
        </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" className="w-100" onClick={toggleModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal> 
    </>
  )
}

export default SocialNetwork