import "./App.scss";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import Recipe from "./components/Recipe/Recipe";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Router>
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
        <h1>
          <Link to="/recipes">RECEPTY BRASKO</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/recipe/:id" component={Recipe} />
      </Switch>
    </Router>
  );
}

export default App;
