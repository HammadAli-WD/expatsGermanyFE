import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import SocialNetwork from './components/chat/SocialNetwork';
import SignUp from './components/SignUp';
import Login from './components/login/Login';


function App(props) {
  return (
    <>
    <Router>
          <Switch>
         <Route exact path= "/" component={Home} />
         <Route path="/join" exact component= {SocialNetwork} />
         <Route path="/signUp" exact component= {SignUp} />
         <Route path="/login" exact component= {Login} />         
       </Switch>
     </Router>   
   
    </>
  );
}

export default App;
