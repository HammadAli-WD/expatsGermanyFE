import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import { Modal, Image, Media } from "react-bootstrap"
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
const { accesstoken } = sessionStorage;
let socket = io("http://localhost:3005", connOpt)

function Messages({ room }) {

    const [username, setUsername] = React.useState(null)

    const [message, setMessage] = React.useState("")
    const [messages, setMessages] = React.useState([])
    const [connectedUsers, setConnectedUsers] = React.useState([])



    useEffect(() => {

        try {

            fetch("http://localhost:3005/user/me", {
                method: "GET",
                credentials: "include",
            })
                .then((response) => response.json())
                .then(data => {
                    console.log('username', data.username)
                    socket.emit("join", {
                        username: data.username,
                        room: room,
                    })

                })
            // .then(setUser),



        } catch {
            console.log("data fetch error")
        }

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
                room: room,
                message: message,
            })
            setMessage("")
        }
    }

    return (
        <>
            <Page>
                <Container>
                    <h6>{room} {username} </h6>

                    {/*  {connectedUsers.map((user, i) => (
            <li key={i}>
              <h6><strong>{user.username}</strong></h6>
            </li>
          ))} */}

                    {/* {messages.map((msg, i) => (
            <li key={i}>
              <strong>{msg.sender}</strong> {msg.text} - {msg.createdAt}
            </li>
          ))} */}


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


        </>
    )
}

export default Messages