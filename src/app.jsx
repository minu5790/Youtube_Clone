import React,{ useState,useEffect } from "react";
import styles from "./app.module.css";

import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_List/videoList";


const App= ()=> {
  const [videos, setVideos] = useState([]);
  const api_key =process.env.REACT_APP_API_KEY;
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${api_key}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);

  return (
  <div className={styles.app}>
    <SearchHeader/>
    <VideoList videos={videos}/>
  </div>
  );
}

export default App;
