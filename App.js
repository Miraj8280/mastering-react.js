import React from 'react';
import ReactDOM from 'react-dom/client';

/* Creating HTML-like nested structure */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Miraj Asraf"),
    React.createElement("p", {}, "Pursuing B.Tech in Computer Science & Engineering from JGEC.")
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
