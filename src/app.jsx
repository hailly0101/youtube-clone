import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './screen/video_list/video_list';
import Serch from './screen/serch/serch';

function App({youtube}) {
  const [videos, setVideos] = useState([]);

  const search = query =>{
  
      youtube
      .search(query)//
      .then(videos => setVideos(videos));
    
  }

  useEffect(() => {
    youtube
    .mostPopular()//
    .then(videos => setVideos(videos));
  }, []);
  return(
  <div className={styles.app}>
  <Serch onSearch={search}/>
  <VideoList videos={videos} />
  
  </div>
  )
}

export default App;
