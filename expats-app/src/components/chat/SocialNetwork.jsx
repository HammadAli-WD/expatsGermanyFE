import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import { Modal} from "react-bootstrap"
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #46516e;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  background-color: pink;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #46516e;
  font-size: 17px;
`;

const Form = styled.form`
  width: 400px;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: pink;
  color: #46516e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: lightgray;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;

const connOpt = {
  transports: ["websocket"],
}
const {accesstoken} = sessionStorage;
let socket = io("http://localhost:3005", connOpt)

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
        username: user,
        room: room,
      })
      setShowModal(!showModal)
    }
  }

  return (
    <>
      <Page>
      <Container>
        <h6>{room}</h6>
       
          {connectedUsers.map((user, i) => (
            <li key={i}>
              <strong>{user.user}</strong>
            </li>
          ))}
       
        
          {messages.map((msg, index) => (
            <MyRow key={index}>
            <MyMessage>
              <strong>{msg.sender}</strong> {msg.text} - {msg.createdAt}
              </MyMessage>
              </MyRow>
          ))}
        </Container>
        <Form 
          id="chat"
          onSubmit={sendMessage}
          
        >
          <TextArea 
            autoComplete="off"
            value={message}
            onChange={handleMessage}
            
          />
          <Button type="send" >
            Send
          </Button>
        </Form >
        </Page>
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
            <li key={i} onClick={()=>{ return(setRoom(room.name))}}>
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