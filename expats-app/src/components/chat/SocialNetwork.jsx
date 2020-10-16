import React from "react"
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
  const [username, setUsername] = React.useState(null)
  const [roomName, setRoomName] = React.useState(null)
  const [message, setMessage] = React.useState("")
  const [messages, setMessages] = React.useState([])
  const [connectedUsers, setConnectedUsers] = React.useState([])
  const [showModal, setShowModal] = React.useState(true)

  React.useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((messages) => messages.concat(msg))
    })
    socket.on("roomData", ({ room, users }) => {
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
        room: roomName,
        message: message,
      })
      setMessage("")
    }
  }

  const toggleModal = () => {
    if (username !== null) {
      socket.emit("join", {
        username: username,
        room: roomName,
      })
      setShowModal(!showModal)
    }
  }

  return (
    <>
      <div>
        <h1>{roomName}</h1>
        <ul id="messages" style={{ listStyle: "none", padding: "0 2rem" }}>
          {" "}
          {connectedUsers.map((user, i) => (
            <li key={i}>
              <strong>{user.username}</strong>
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
          <Modal.Title>Set username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="my-2">
            <FormControl
              placeholder="Enter a Username"
              onChange={(e) => setUsername(e.currentTarget.value)}
            ></FormControl>
          </InputGroup>
          <InputGroup className="my-2">
            <FormControl
              placeholder="Enter room name"
              onChange={(e) => setRoomName(e.currentTarget.value)}
            ></FormControl>
          </InputGroup>
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