import React from "react";
import "./styles/Recipe.scss";

function Recipe(props, { data }) {
  /*  console.log(props, "HELLO FROM THIS RECIPE PROPS");
  const title = props.location.state.recipe;*/
  /*   const databaze = props.location.state.databaze;*/

  // const propsata = props.location.state;

  const jmeno = props.location.state.name;
  const ziskWeek = props.location.state.ziskWeek;

  // console.log(title, "<- title");

  return (
    <div className=" md:container md:mx-auto kontejner">
      <div className="grid grid-cols-6">
        <div className="bg-blue-500 profile">{ziskWeek}</div>
        <div className="bg-blue-400 col-span-5 infoProfile">
          <div className="grid grid-cols-3 gap-x-3 gay-y-2">
            <div className="weekProfit">3</div>
            <div className="monthProfit">2</div>
            <div className="yearProfit">1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
