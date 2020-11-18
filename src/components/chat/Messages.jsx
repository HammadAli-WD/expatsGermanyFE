import React, { useEffect, useState } from "react"
import io from "socket.io-client";
import { Media, Image } from 'react-bootstrap'
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';
import styled from "styled-components";
import NavBar from "../navbar/NavBar";
import moment from "moment";
const url = process.env.REACT_APP_API_HEROKU
const { Meta } = Card;
const Page = styled.div`
  
  overflow: hidden;
  position: relative;
  display: flex;
  margin-top: 50px;  
  align-items: center;  
  flex-direction: column;
  height: 80vh; 

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;  
  max-height: 400px;
  height: 80vh;
  overflow: hidden;
  width: 390px;
  border: 1px solid #2d3436;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  width: 98%;
  height: 50px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid #2d3436;
  outline: none;
  color: #2d3436;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: #2d3436;
  }
`;

const Button = styled.button`
  background-color: #2d3436;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #FFFFFF;
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
  width: 65%;
  background-color: #F8F8F8;
  color: #46516e;
  padding: 1px;
  margin-right: 5px; 
  text-align: justify;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: #2d3436;
  border: 1px solid #2d3436;
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
let socket = io(url, connOpt)

function Messages({ room }) {

  const [username, setUsername] = React.useState(null)
  const [image, setImage] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [messages, setMessages] = React.useState([])
  const [connectedUsers, setConnectedUsers] = React.useState([])



  useEffect(() => {

    try {

      fetch(url + "/user/me", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then(data => {
          console.log('username', data)
          socket.emit("join", {
            username: data.username,
            room: room,
          })
          setUsername(data.username)
          setImage(data.image)
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
        image: image,

      })
      setMessage("")
    }
  }

  return (
    <>

      <Page>
        <NavBar link='/logout' name='SignOut' />
        <Container>
          <h4 style={{ textShadow: "1px 1px 0px #ff0000", justifyContent: 'center', alignItems: 'center', display: "flex" }}> {room} </h4>

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

          {console.log('messssssssssssss', messages)}
          {messages.map((msg, index) => (
            <Card key={index} bodyStyle={{ padding: "8px" }} style={{ width: 250, margin: '16px 4px 0 4px', alignSelf: username === msg.sender ? 'flex-end' : 'flex-start' }} loading={false} >
              <Meta
                avatar={
                  msg.image ? <Image style={{ padding: "0px", marginRight: "5px", marginBottom: "0px", width: '40px' }}
                    src={msg.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'}
                    roundedCircle />
                    :
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{msg.sender}
                    </Avatar>
                }
                title={msg.sender}
                description={msg.text}
              />
              <nobr><p style={{ color: '#696969', fontStyle: "italic", fontSize: '70%', padding: "0px", marginTop: "0px", marginRight: "4px", textAlign: 'right' }}>
                sent at: {moment(msg.createdAt).format("HH:mm:ss")} </p></nobr>
            </Card>
            /* <MyRow key={index}>
              <MyMessage>
                <Media as="li">
                  <Image style={{ padding: "0px", marginRight: "5px", marginBottom: "0px", width: '40px' }}
                    src={msg.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'}
                    roundedCircle />

                  <Media.Body>
                    <p style={{ padding: "0px", marginRight: "3px", marginBottom: "0px" }}> <strong>{msg.sender[0]} says: </strong> {msg.text}</p>
                    <nobr><p style={{ color: '#696969', fontStyle: "italic", fontSize: '70%', padding: "0px", marginTop: "0px", marginRight: "4px", textAlign: 'right' }}>
                      sent at: {moment(msg.createdAt).format("HH:mm:ss")} </p></nobr>


                  </Media.Body>
                </Media>
              </MyMessage>
            </MyRow> */
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