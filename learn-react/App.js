import React from "react";
import ReactDOM from "react-dom/client";

/*
*<div id="parent">
*      <div id="child">
*           <h1>I,m h1 tag.</h1>
*           <h2>I,m h2 tag.</h2>
*      </div>
*      <div id="child2">
*           <h1>I,m h1 tag.</h1>
*           <h2>I,m h2 tag.</h2>
*      </div>
</div>
*
*ReactElement(Object) =>HTML(Browser Understands)
*/

// React.createElement => ReactElement - JS Object =>  HTMlElement (render)

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [
                React.createElement("h1", {}, "I'm h1 tag............."),
                React.createElement("h2", {}, "I'm h2 tag.")
            ]),
        React.createElement("div", { id: "child2" },

            [
                React.createElement("h1", {}, "I'm h1 tag."),
                React.createElement("h1", {}, "I'm h2 tag.")
            ]
        )
    ]
);

console.log(parent);

// JSX -  HTML-like or XML-like syntax

// JSX (transpiled before it reaches the Javascript Engine) -> Parcel -- Babel (converts the JSX into the code that the JS engine understands, React understrands) 

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object =>  HTMlElement (render)

// React elementJS Object =>  HTMlElement (render)


const Compo = () => {
    <h4>hehe haha</h4>
}
// React element : not functional componenet because it is not a js function .... (hehe)

const elem = <span>
    React Element
    {/* Component inside element */}
    <Compo />
</span>

const jsxHeader = (
    <h1 className="hello">
        {/* Element inside element */}
        {elem}
        <br />
        Hello React using JSX
    </h1>
)

console.log(jsxHeader);

// Component
const Title = () => (<h1 className="title"> This is the title. </h1>);

// React Functional Component: JS function that returns JSX Element... 

// Component composition = component inside another component (like that).....

const number = 1000;
const HeadingComponent = () => {
    return (
        <div id="container">

            {/* {} -> is used is inside JSX to write any JS code */}
            <h2>{number} {100 + 200} {console.log("Hello dear hehe")}</h2>

            {Title()} {/* just calling the function */}
            <Title /> {/* component inside component */}
            <Title></Title >

            <h1 className="heading">Hello React Functional Component</h1>

            {/* element inside component */}
            <h1>{jsxHeader}</h1>

        </div>
    );
}
// OR
const HeadingComponent2 = () => (<h1 className="heading">Hello React Functional Component</h1>);


// const heading = React.createElement("h1",
//     {id: "heading", xyz: 'abc' },  //Attributes is writtes here -> Object
//     "Hello world through React!");

// console.log(heading);  //Onject
// root.render(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( parent);

root.render(jsxHeader); // We render React Element like this

root.render(<HeadingComponent />); // We render React Components like this


