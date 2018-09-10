import React, { Component } from 'react';

import ModalController from './modals/videoModal';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="componentTitle">
          <h1> Videos </h1>
          <p> I simplify advanced problems in these videos, showing you the step by step method to solving them! </p>
        </div>


        <div className="videoGallery">
          <div className="video">
            <div className="videoName">
              <p>Inclined Planes, Q15</p>
            </div>
            <div className="videoPlayer">
              <iframe width="392" height="220.5" src="https://www.youtube.com/embed/cbHAO7iTifI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen alt="Inclined Planes Q15"></iframe>
            </div>
          </div>

          <div className="video">
            <div className="videoName">
              <p>Inclined Planes, Q11</p>
            </div>
            <div className="videoPlayer">
              <iframe width="392" height="220.5" src="https://www.youtube.com/embed/o9ysmUIMUaE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen alt="Inclined Planes Q11"></iframe>
            </div>
          </div>

          <div className="video">
            <div className="videoName">
              <p>Inclined Planes, Q18</p>
            </div>
            <div className="videoPlayer">
              <iframe width="392" height="220.5" src="https://www.youtube.com/embed/vhLyoyqlons" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen alt="Inclined Planes Q118"></iframe>
            </div>
          </div>

          <ModalController/>
          
        </div>
      </div>
    );
  }
}

export default HomePage;
