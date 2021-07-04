import React, { useEffect, useState } from 'react';
import './App.css';
import VideoList from './screen/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      // 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBU9f-h_5O_mCIGXXP_tgGMvmshnsW2jOc&part=snippet&chart=mostPopular&maxResults=25',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
