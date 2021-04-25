import React from "react";

function Recipe(props) {
  console.log(props, "HELLO FROM THIS RECIPE PROPS");

  const title = props.location.state.recipe;

  console.log(title, "<- title");

  return (
    <div>
      <button>hello IM ONE RCIPE</button>
      <h5>{title}</h5>
    </div>
  );
}

export default Recipe;
