import React, {useState, useEffect} from "react";
import axios from 'axios';
import { CloudinaryContext, Image } from "cloudinary-react";
import { openUploadWidget } from "./CloudinaryService.js";
import ImageView from './ImageView.jsx'
import ImageData from '../mockdata.json'

const Home = () => {
  const [images, setImages] = useState([]);
  const [posted, setPosted] = useState(false)
  useEffect(()=> {
    axios.get('/photos')
    .then((result) => {
      setImages(result.data);
    })
  }, [posted])

  //cloudinary upload handler
  const beginUpload = tag => {
    console.log('This is the tag', tag)
    const uploadOptions = {
      cloudName: "dvijvlkad",
      tags: [tag],
      uploadPreset: "upload"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if(photos.event === 'success'){
          //uploaded
          var photoItem = {
            url: photos.info.url,
            thumbnail: photos.info.thumbnail_url
          }
          axios.post('/photos', photoItem)
          .then(result => {
            setPosted(prev=> !prev);
          })
        }
      } else {
        console.log(error);
      }
    })
  }

  return (
    <div>
      <CloudinaryContext cloudName="dvijvlkad">
      <div className="title">
        <span>Dimensions</span>
        <button className="upload-button" onClick={() => beginUpload()}>Upload Images</button>
      </div>
      <p>Upload images and retrieve a physical address, then see what it would look like in an alternate universe!</p>


      <div className="container">
      {images && images.map((item, i) => {
        console.log('THIS IS ITEM',item)
        return (<ImageView key={i} image={item}/>)
      })}
      </div>
      </CloudinaryContext>
    </div>
  )
}

export default Home;