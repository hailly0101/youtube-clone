import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './screen/video_list/video_list';
import Serch from './screen/serch/serch';
import Videodetail from './screen/video_detail/video_detail';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = useCallback(query =>{
  
      youtube
      .search(query)//
      .then(videos => setVideos(videos), setSelectedVideo(null));
  
  }, [youtube]);

  const selectVideo = (video) =>{
    setSelectedVideo(video);
  }

  useEffect(() => {
    youtube
    .mostPopular()//
    .then(videos => setVideos(videos));
  }, [youtube]);
  return(
  <div className={styles.app}>
  <Serch onSearch={search} />
  <section className={styles.content}> 
  {selectedVideo && (
 <div className={styles.detail}>
 <Videodetail video={selectedVideo}/>

 </div>
  )}
 
  <div className={styles.list}>
  <VideoList videos={videos} onVideoClick ={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
  </div>
  </section>

  </div>
  )
}

export default App;
