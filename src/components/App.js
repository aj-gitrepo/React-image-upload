import React, {useState} from "react";
import './App.css';
import { storage } from "../firebase";

const App = () => {


  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setImage(imageFile);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progressSnap = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(snapshot);
        setProgress(progressSnap);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images") //folder name as above
          .child(image.name)
          .getDownloadURL()
          .then((downloadUrl) => {
            setUrl(downloadUrl);
          });
      }
    );
  }

  console.log("image: ", image);
  console.log(progress);

  return(
    <div>
      
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <progress value={progress} max="100" />
      <br />
      {url}
      <br />
      <img src={url || "https://via.placeholder.com/300"} alt="firebase-image" height={'300px'} />
      <br />
      <img src={image? URL.createObjectURL(image) : null} alt={image? image.name: null} height={'300px'} />
    </div>
  );
}

export default App;