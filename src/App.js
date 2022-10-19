import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Sulley",
      animal: "Dog",
      breed: "Schnauzer",
    }),
    React.createElement(Pet, {
      name: "Zeus",
      animal: "Cat",
      breed: "Persian",
    }),
    React.createElement(Pet, {
      name: "Odin",
      animal: "Cat",
      breed: "Russian Blue",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
