import React, {useState, useEffect} from "react";

const ModalAlternate = ({visibility, handleModalClose, image}) => {
  console.log('THIS IS IMAGE', image)
  return(
    <div class="modal-container" style={{visibility:`${visibility}`}}>
      <div class="modal">
          <span class="close-button" onClick={handleModalClose}>&times;</span>
          <img src={image.alternate}></img>
          <br></br>
          <p><ul>
            {image.labels.map(label=> {
              return (<li>{label}</li>)
            })}
          </ul></p>
      </div>
    </div>
  )
}
export default ModalAlternate;