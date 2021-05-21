import React from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Contact from './Contact';
import Signup from './Signup';



function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/"><Contact /></Route>
          <div className="bg-info " style={{marginLeft: "20%" , width: '80%', height: "100vh"}} data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1100"><Route exact path='/Signup'><Signup /></Route></div>
    </Switch>
    </Router>

  );
}

export default App;
