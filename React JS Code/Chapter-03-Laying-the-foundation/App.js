import React from "react";
import ReactDOM from "react-dom/client";
import { createElement } from "react";

// const heading = React.createElement("h1", {
//     id:"title",
// }, "Namaste Guys!"); // NOT A GOOD METHOD. COMPLICATED
// console.log("heading",heading)

// const heading2 = createElement("h1", {
//     id:"title",
// }, "Namaste Guys!"); // NOT A GOOD METHOD. COMPLICATED
// console.log("heading",heading)

// //JSX - Update whole html using javascript.
// const heading3 = <h1>Namaste</h1>

const Heading4 = () => (
<h1 id="title" key="h2">
    Namaste Fun
    </h1>)

// const data = api.getData(); // xss attack; some hacker put js in code // we can get password, cookies, etc

// Functional Component is a function that returns a JSX
const HeaderComponent = () => {
    return (
        <div>
            {/* {heading4} */}
            {console.log("2323")}
            <h1 id="title" key="h1">
                Namaste12132323
            </h1>
            <Heading4/>
        </div>
    );
}
// h1 - element, {}, what to put inside h1
const root = ReactDOM.createRoot(document.getElementById("root"))

//passing a react element inside the root
root.render(<HeaderComponent/>)