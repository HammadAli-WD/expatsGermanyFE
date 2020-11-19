import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SocialNetwork from './components/chat/SocialNetwork';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';
import Home from './pages/Home';
import ChatRooms from './components/chat/ChatRooms';
import Messages from './components/chat/Messages';
import SignOut from './components/signout/SignOut';
import 'react-app-polyfill/stable';


function App(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/join" exact component={SocialNetwork} />
          <Route path="/rooms/:room" component={props => <Messages room={props.match.params.room} />} />
          <Route path="/rooms" exact component={ChatRooms} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" exact component={SignOut} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
