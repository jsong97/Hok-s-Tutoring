import React, { Component } from 'react';

import VideoOneModal from './modals/videoModalOne';
import VideoTwoModal from './modals/videoModalTwo';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class Videos extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="componentTitle">
          <h1> Videos </h1>
          <p> I simplify advanced problems in these videos, showing you the step by step method to solving them! </p>
        </div>

        <div className="videoContainer">
          <div className="videoGallery">

            <VideoOneModal/>
            <VideoTwoModal/>

            <div className="video">
              <div className="videoName">
                <p>Inclined Planes, Q18</p>
              </div>
              <div className="videoPlayer">
                <iframe width="392" height="220.5" src="https://www.youtube.com/embed/vhLyoyqlons" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen alt="Inclined Planes Q118"></iframe>
              </div>
            </div>

          </div>

          <div className="videoNavigation">
            <p>Hullo</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
