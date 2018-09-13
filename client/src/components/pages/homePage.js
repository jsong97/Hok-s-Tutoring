import React, { Component } from 'react';
import posed from "react-pose";
import { render} from "react-dom";
import styled from "styled-components";
import { tween } from "popmotion";
import Anime from 'react-anime';


import Customers from './customers/customers';
import Reviews from './reviews/reviews';
import Slider from './reviews/slider';
import Queries from './queries';
import Game from './tileGame/game';
// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 2em;
  padding: 2em;
  margin-bottom: 3em;

  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 0.5em;
  /* grid-auto-rows: 20em; */
  grid-auto-rows: minmax(8em, auto);
`;

const Square = posed.div({
  idle: {
    scale: 1,
    opacity: 0.7,
    transition: props => tween({ ...props, duration: 2000 })
  },
  hovered: {
    scale: 1.1,
    opacity: 1.2,
    transition: props => tween({ ...props, duration: 1000 })
  }
});

const StyledSquareOne = styled(Square)`
  grid-column: 1/2;
  grid-row: 2/3;
  background-color: $black;
  color: $white;
  border: 2px solid black;
  padding: 10px;
  margin: 0 auto;
  width: 50%;
  height: 80%;
  text-align: center;
`;

const StyledSquareTwo = styled(Square)`
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: $black;
  color: $white;
  border: 2px solid black;
  padding: 10px;
  margin: 0 auto;
  width: 50%;
  height: 80%;
  text-align: center;
`;

const StyledSquareThree = styled(Square)`
  grid-column: 3/4;
  grid-row: 2/3;
  background-color: $black;
  color: $white;
  border: 2px solid black;
  padding: 10px;
  margin: 0 auto;
  width: 50%;
  height: 80%;
  text-align: center;
`;

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state= {
      isMethodsModalOpen: false,
      isSpeshModalOpen: false,
      isUniModalOpen: false,
      hovering1: false,
      hovering2: false,
      hovering3: false
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
        </div>

        <div className="funBlock">
          <Game />
        </div>

        <div className="topicBlock">
          <Container>
            <h1> Topics </h1>
            <StyledSquareOne
              pose={this.state.hovering1 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hovering1: true })}
              onMouseLeave={() => this.setState({ hovering1: false })}
            >
              <h2>Math<br/>Methods</h2>
            </StyledSquareOne>

            <StyledSquareTwo
              pose={this.state.hovering2 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hovering2: true })}
              onMouseLeave={() => this.setState({ hovering2: false })}
            >
              <h2>Specialist Maths</h2>
            </StyledSquareTwo>


            <StyledSquareThree
              pose={this.state.hovering3 ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hovering3: true })}
              onMouseLeave={() => this.setState({ hovering3: false })}
            >
              <h2>University Studies</h2>
            </StyledSquareThree>


          </Container>
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
