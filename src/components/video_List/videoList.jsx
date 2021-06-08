import React from 'react';
import VideoItem from '../video_item/videoItem';
import styles from './videoList.module.css'
const VideoList = ({videos, onVideoClick, display})=>{
  
  return(
    <ul className={styles.videos}>
         {videos.map(video=>{return <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display}></VideoItem>})}
    </ul>
  )
  
}


export default VideoList;