import React, {useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import '../styles/styles.css'
import Home from './components/Home.jsx'
const root = createRoot(document.getElementById("root"));

const App = () => {

  return (<Home />)
}

root.render(<App />);
