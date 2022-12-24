const h1 = React.createElement("h1", {}, "Namaste React!");
const h2 = React.createElement("h2", {}, "Namaste React Again!");
const mainDiv = React.createElement(
  "div",
  {
    className: "box",
  },
  [h1, h2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainDiv);
