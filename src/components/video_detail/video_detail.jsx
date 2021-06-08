import React from 'react';
import styles from './video_detail.module.css'
const VideoDetail = ({video, video:{snippet}}) => {
    return(
        <>
        <section className={styles.detail}>
            <iframe  className={styles.video} id="ytplayer" type="text/html" width="100%" height="500px"src={`https://www.youtube.com/embed/${video.id}`} frameborder="0" allowfullscreen></iframe>
        </section>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre className={styles.description}>{snippet.description}</pre>
        </>
    )
}

export default VideoDetail;