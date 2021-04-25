import React, { useState, useEffect } from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import List from "./List";

function Recipes(props) {
  useEffect(() => {
    console.log(data, "<---data");
  });
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
    <div>
      {data &&
        data.length > 0 &&
        data.map((item, key) => (
          <div key={item.id} className="listWrapper">
            <Link
              to={{
                pathname: `/recipe/${item.id}`,
                state: { recipe: item.lastName },
              }}
            >
              <button>PODIVEJ SE NA INFO</button>
            </Link>

            <h1>{item.lastName}</h1>
            <h2>{item.firstName}</h2>
            <h5>{item.id}</h5>
            <p>{item.address.streetAddress}</p>
          </div>
        ))}
    </div>
  );
}
export default Recipes;
