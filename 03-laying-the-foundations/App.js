import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>

const Title = () => (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX 🚀
    </h1>
);

const number = 10000;

    const HeadingComponent = () => (
        <>
            <div id="container">
                <Title />
                {Title}
                {Title()}
                {<Title></Title>}
                <h1 className="heading">Namaste React Functional Component</h1>
            </div>
            <div>Test</div>
        </>
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(< HeadingComponent />);







