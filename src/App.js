import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/navbar";
import Register from "./components/Register";
import YourTicket from "./components/YourTicket";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {


  return (
    <>
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Ticket" exact component={YourTicket} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;

