import React, { Component } from 'react';

import VideoModal from './modals/videoModal';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class Videos extends Component {

  render() {

    const firstTitle = "Inclined Planes, Q15";
    const firstImg = "http://i.ytimg.com/vi/cbHAO7iTifI/maxresdefault.jpg";
    const firstVid = "https://www.youtube.com/embed/cbHAO7iTifI";

    const secondTitle = "Inclined Planes, Q18";
    const secondImg = "http://i.ytimg.com/vi/o9ysmUIMUaE/maxresdefault.jpg";
    const secondVid = "https://www.youtube.com/embed/vhLyoyqlons";

    return (
      <div className="container">
        <div className="componentTitle">
          <h1> Videos </h1>
          <p> I simplify advanced problems in these videos, showing you the step by step method to solving them! </p>
          <div id="borderLeft"></div>
        </div>

        <div className="videoContainer">
          <div className="videoGallery">

            <VideoModal
              title={firstTitle}
              imgSrc={firstImg}
              vidSrc={firstVid}
            />
            <VideoModal
              title={secondTitle}
              imgSrc={secondImg}
              vidSrc={secondVid}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
