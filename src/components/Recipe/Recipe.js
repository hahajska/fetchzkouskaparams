import React from "react";
import Crypto from "./Crypto";
import "./styles/Recipe.scss";

function Recipe(props, { data }) {
  /*  console.log(props, "HELLO FROM THIS RECIPE PROPS");
  const title = props.location.state.recipe;*/
  /*   const databaze = props.location.state.databaze;*/

  // const propsata = props.location.state;

  const jmeno = props.location.state.name;
  const ziskWeek = props.location.state.ziskWeek;
  const ziskMonth = props.location.state.ziskMonth;
  const ziskYear = props.location.state.ziskYear;

  // console.log(title, "<- title");

  return (
    <div className=" md:container md:mx-auto kontejner">
      <div className="grid grid-cols-6">
        <div className=" profile">{jmeno}</div>

        <div className="col-span-5 infoProfile">
          <div className="grid grid-cols-3 gap-x-3 gay-y-2">
            <div className="weekProfit rounded-lg	flex justify-center items-center">
              <span className="profitProcentaBig">{ziskWeek}</span>
              <h1>7-day Profit</h1>
              <span className="profitProcentaSmall">{ziskWeek}%</span>
            </div>
            <div className="monthProfit rounded-lg flex justify-center items-center	">
              <span className="profitProcentaBig">{ziskMonth}</span>
              <h1>1-month Profit</h1>
              <span className="profitProcentaSmall">{ziskMonth}%</span>
            </div>
            <div className="yearProfit rounded-lg flex justify-center items-center	">
              <span className="profitProcentaBig">{ziskYear}</span>
              <h1>1-year Profit</h1>
              <span className="profitProcentaSmall">{ziskYear}%</span>
            </div>
          </div>
          <Crypto />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
