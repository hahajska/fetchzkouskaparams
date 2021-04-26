import React, { useState, useEffect } from "react";
import "./styles/Recipes.scss";
import { AiOutlineStar } from "react-icons/ai";

import { BrowserRouter as Router, Link } from "react-router-dom";

function Recipes(props) {
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
        console.log(myJson, "MY JSONG OMG");
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="md:container md:mx-auto Kontejner flex justify-center items-center flex-col py-5 px-1">
      {data &&
        data.length > 0 &&
        data.map((item, key) => (
          <div key={item.id} className="listWrapper grid grid-cols-5">
            <div className="grid grid-cols-2">
              <div className="flex items-center justify-center">
                <AiOutlineStar />
              </div>
              <div>
                <p>{item.id}</p>
              </div>
            </div>
            <div>
              <h2>{item.name}</h2>
            </div>
            <div className="text-center text-green-600">
              <h5>{item.ziskWeek}</h5>
            </div>
            <div className="text-left text-green-600">
              <p>{item.ziskTotal}</p>
            </div>
            <div className="text-left ">
              <Link
                to={{
                  pathname: `/recipe/${item.id}`,
                  state: {
                    name: item.name,
                    ziskWeek: item.ziskWeek,
                    //...data,
                  },
                }}
              >
                <button className="btnMore">CHECK THE INVESTOR</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Recipes;
