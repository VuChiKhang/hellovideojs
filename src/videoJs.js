import React from "react";
import VideoPlayer from "react-video-js-player";
import TestVideo from "./video/test.mp4";
import PosterVideo from "./video/cover.png";

const VideoJS = () => {
    const videoSrc = TestVideo;
    const poster = PosterVideo;
    return(
        <div className="App">
            <h1>VideoJS</h1>
            <VideoPlayer src={videoSrc} poster={poster} width="720" height="420"> </VideoPlayer>
        </div>
    );
  };
  export default VideoJS;