import React from "react";
import "./App.css";
import Login from "./component/Login/login.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from "./component/Register/register.js";
import MainVacation from "./component/vacation/MainVacation.js";
import AddVacation from "./component/vacation/AddVacation.js";
import Graph from"./component/Graph/Graph.js";

function App() {
  return (
    <div className="App">
                <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/MainVacation">
            <MainVacation />
          </Route>
          <Route path="/AddVacation">
            <AddVacation />
          </Route>
          <Route path="/Graph">
          <Graph/>
          </Route>
          {/* <Route path="/About" component={About} />
        <Route path="/Main" component={Main} />
        <Route path="/Admin" component={Admin} />
        <Route path="/favorite" component={Favorite} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
