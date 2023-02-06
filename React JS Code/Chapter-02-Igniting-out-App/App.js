import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
    id:"title",
}, "Namaste Guys!");
console.log("heading",heading)
// h1 - element, {}, what to put inside h1
const root = ReactDOM.createRoot(document.getElementById("root"))

//passing a react element inside the root
root.render(heading)