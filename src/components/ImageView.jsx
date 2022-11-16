import React, {useState, useEffect} from "react";
import ModalAlternate from './ModalAlternate.jsx';
import axios from 'axios';

const ImageView = ({key, image}) => {

  const [visibility, setVisibility] = useState('hidden');
  var handleModalClose = ()=> {
    setVisibility("hidden");
  }
  var handleModalOpen = (e) => {
    console.log('TRIGGERED', e)
    setVisibility("visible");
  }

  return(
  <div className="gallery-container">
    <div className="gallery-item">
      <div className="image"><img src={image.url}/></div>
      <div className="text">
        {image.address}<br></br>
      </div>
      <button onClick={handleModalOpen} className="alternate">Alternate Universe</button>
    </div>
    <ModalAlternate handleModalClose={handleModalClose} visibility={visibility} image={image}/>
  </div>
  )
}
export default ImageView