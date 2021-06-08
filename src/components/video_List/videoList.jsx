import React from 'react';
import VideoItem from '../video_item/videoItem';
import styles from './videoList.module.css'
const VideoList = (props)=>{
  return(
    <ul className={styles.videos}>
         {props.videos.map(video=>{return <VideoItem key={video.id} video={video}></VideoItem>})}
    </ul>
  )
  
}


export default VideoList;