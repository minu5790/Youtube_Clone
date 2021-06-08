import React,{ useState,useEffect } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_List/videoList";


const App= ({youtube})=> {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) =>{
    setSelectedVideo(video);
  }
  const search = query =>{
    
    youtube.search(query)
    .then(items => {
      setVideos(items);
      setSelectedVideo(null)
    })
    .catch(error => console.log('error', error));

  }
  useEffect(()=>{
    youtube.mostPopular()
    .then(items => setVideos(items))
    .catch(error => console.log('error', error));

  },[]);

  return (
  <div className={styles.app}>
    <SearchHeader onSearch={search}/>
    <section className={styles.content}>
    {selectedVideo &&(
      <div className={styles.detail}>
         <VideoDetail video={selectedVideo}/>
      </div>)}
    
      <div className={styles.list}>
        <VideoList videos={videos} onVideoClick={selectVideo} display ={selectedVideo ? 'list' : 'grid'}/>
      </div>
    </section>
  </div>
  );
}

export default App;
