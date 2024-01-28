// const heading = React.createElement('h1', {id: "heading", miraj: "asraf"}, "Hello World from React!");

/* Creating HTML-like nested structure */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Miraj Asraf"),
    React.createElement("p", {}, "Pursuing B.Tech from JGEC")
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
