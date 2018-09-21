import React, { Component } from 'react';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class AddVideo extends Component {
  constructor(){
    super();
    this.state = {
      videos: []
    }
  }

  // use this to fetch routes in the backend
  componentDidMount() {
    fetch('/api/video')
      .then(res => res.json())
      .then(videos => this.setState({videos}, () => console.log('Videos fetched..',
      videos)));
  }


  render() {
    return (
      <div className="container">
        <div className="componentTitle">
          <h1> Adding Video </h1>
          <p> Add videos to the database </p>
          <div id="borderLeft"></div>
        </div>

        <div className="content">
          <form method="POST" action="/addVideo">
            <div className="topLine">
              <div id="form-group">
                <input class="form-control" name="name" type="text" placeholder="Enter video name"/>
              </div>
              <div id="form-group">
                <input class="form-control" name="video" type="text" placeholder="Enter video link"/>
              </div>
              <input class="btn btn-primary" type="submit" value="Submit"/>
            </div>
          </form>

          <ul>
            {this.state.videos.map(video =>
              <li>{video.name}</li>
            )}
          </ul>
        </div>


      </div>
    );
  }
}

export default AddVideo;
