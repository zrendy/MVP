// Bring React in to build a component.
import React, {useState, useEffect} from "react";
// Import from react-dom the ability to create a root render
import { createRoot } from "react-dom/client";
import axios from 'axios';
const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  useEffect(()=> {
    axios.get('http://localhost:3001/api')
    .then((result) => {
      console.log(result)
    })

  })
  return <h1>Hell World</h1>
}

root.render(<App />);
