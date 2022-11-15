import React, {useState, useEffect} from "react";
import axios from 'axios';
import { CloudinaryContext, Image } from "cloudinary-react";
import { openUploadWidget } from "./CloudinaryService.js";

const Home = () => {
  const [images, setImages] = useState([]);
  useEffect(()=> {
    axios.get('http://localhost:3001/api')
    .then((result) => {
      console.log(result)
      console.log(images)
    })
  }, [])

  //cloudinary upload handler
  const beginUpload = tag => {
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
          axios.post('http://localhost:3001/photos', photoItem)
          //add to database
          console.log(images)
          setImages([...images, photoItem.url])
        }
      } else {
        console.log(error);
      }
    })
  }





  return (
    <div>
      <CloudinaryContext cloudName="dvijvlkad">
      <h1>Hello World</h1>
      <section>{images.map(i => <Image
              key={i}
              publicId={i}
              fetch-format="auto"
              quality="auto"
            />)}</section>
      <button onClick={() => beginUpload()}>Upload Image</button>
      </CloudinaryContext>
    </div>

  )
}

export default Home;