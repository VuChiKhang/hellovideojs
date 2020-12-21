import React, {Component} from 'react';
import './App.css';
import './Video.css';
import VideoPlayer from "react-video-js-player";
// import Movie from "./video/test.mp4";
import PosterMovie from "./video/cover.png";

class App extends Component  {

  render(){
    // const movieSrc = Movie;
    const moviePoster = PosterMovie;
    return (
      <div>
       <h1>Movie 1</h1>
       <image src='./video/cover.png'></image>
       <VideoPlayer
       src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" 
       poster={moviePoster} 
       width="1080" 
       height="600"
       playbackRates={[0.5, 1, 2, 4, 16]} >  </VideoPlayer>
      </div>
    );
  }
}

export default App;


