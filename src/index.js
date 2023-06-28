import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Top from "./Pages/Top/Top.js";
import Background from "./Pages/Background/Background";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <Top />
    <About />
    <Projects />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
