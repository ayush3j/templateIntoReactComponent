import React from "react";
// import ReactDOM from "react-dom";   //older method for rendering
import { createRoot } from 'react-dom/client';


import App from "./App"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

//older method 
// ReactDOM.render(<App/>,document.getElementById("root"));