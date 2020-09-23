import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Navbar from './components/NavBar'
import { Row, Container } from 'react-bootstrap';
function App() {
  return (
    <>
     <Navbar />
      <Login />   
   
    </>
  );
}

export default App;
