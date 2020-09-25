import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route exact path= "/" component={Login} />
         <Route path= "/home" component={Home} />
       </Switch>
     </Router>   
   
    </>
  );
}

export default App;
