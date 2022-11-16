import React, {useState, useEffect} from "react";
import axios from 'axios';

const ImageView = ({image}) => {
  return(
  <div className="img_item">
    <img src={image.url}/>
    <h3>Address:</h3>
    <p>{image.address || "Unknown"}
    <ul>
    {image.labels.map(label=> {
      return (<li>{label}</li>)
    })}
    </ul>
    </p>
  </div>)
}
export default ImageView