import React, {useState, useEffect} from "react";
import axios from 'axios';

const ImageView = ({image}) => {
  return(
  <div>
    <img src={image.url}/>
    <h3>Address:</h3>
    <p>{image.address || "Unknown"}
    {image.labels.map(label=> {
      return (<h3>{label}</h3>)
    })}
    </p>
  </div>)
}
export default ImageView