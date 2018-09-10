import React, { Component } from 'react';

import Customers from './customers/customers';
import Reviews from './reviews/reviews';
import Slider from './reviews/slider';
import Queries from './queries';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state= {
      isMethodsModalOpen: false,
      isSpeshModalOpen: false,
      isUniModalOpen: false
    }
  }

  render() {
    return (
      <div className="container">
        <div className="homePage">

          <div className="titleBox">
            <div className="title">
              <h1>Supercharge your Math Studies with Hoks Tutoring!</h1>
            </div>
          </div>

          <div className="registerForm">
            <div className="basicInfo">
              <form method="POST" action="/">
                <div className="topLine">
                  <div id="form-group">
                    <input class="form-control" name="name" type="text" placeholder="Enter your name"/>
                  </div>
                  <div id="form-group">
                    <input class="form-control" name="username" type="text" placeholder="Enter your address"/>
                  </div>
                  <div id="form-group">
                    <input class="form-control" name="yearLevel" type="text" placeholder="Enter your year level"/>
                  </div>
                </div>
                <div className="secondLine">
                  <div>
                  </div>
                  <div id="form-group">
                    <input class="form-control" name="email" type="text" placeholder="Enter your email"/>
                  </div>
                  <div id="form-group">
                    <input class="form-control" name="phoneNo" type="text" placeholder="Enter your phone no"/>
                  </div>
                </div>
                <div className="thirdLine">
                  <div>
                  </div>
                  <input class="btn btn-primary" id="login-button" type="submit" value="Submit Enquiry"/>
                </div>
              </form>
            </div>
          </div>


        </div>

        <div className="contentPage">
          <div className="title">
            <h3> Browse our resources to discover detailed videos on how to solve all VCE Math topics! </h3>
          </div>
          <div className="introduction">
            <div className="videoPlayer">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/rwSonuLi46k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div className="textIntro">
              <div className="introTitle">
                <p> Hi everybody! I'm Hok! </p>
              </div>
              <p> Thanks for visiting the website :). <br /><br /> I started my freelance tutoring business back in 2016 because I discovered that I loved teaching, and I wanted to share my tips and tricks on how to get straight A's in all your Math subjects!</p>
            </div>
          </div>
        </div>

        <div className="topicBlock">
          <div className="topics">
            <h1> Topics </h1>

            <div className="topicModal1 topicModal">
              <h2>Math <br/> Methods</h2>
            </div>

            <div className="topicModal2 topicModal">
              <h2>Specialist Maths</h2>
            </div>
            <div className="topicModal3 topicModal">
              <h2>University Studies</h2>
            </div>
          </div>
        </div>

        <Slider />

        <Queries />
      </div>
    );
  }

  openMethodsModal(){
    this.setState({isMethodsModalOpen:true})
  }

  closeMethodsModal(){
    this.setState({isMethodsModalOpen:false})
  }
}

export default HomePage;
