import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import SocialNetwork from './components/SocialNetwork';

function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route exact path= "/" component={Home} />
         <Route exact path= "/chat" component={SocialNetwork} />         
       </Switch>
     </Router>   
   
    </>
  );
}

export default App;
