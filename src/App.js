const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
