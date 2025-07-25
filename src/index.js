import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Layout/About/About";
import Contact from "./Layout/Contact/Contact";
import Experience from "./Layout/Experience/Experience";
import Hero from "./Layout/Hero/Hero";
import Navbar from "./Layout/Navbar/Navbar";
import Portfolio from "./Layout/Portfolio/Portfolio";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
