import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import playButton from '../../../Assets/playButton.png';
import './custom_animation.css';


export default class CustomAnimation extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="video">
        <div className="videoName">
          <p>Inclined Planes, Q15</p>
        </div>
        <div className="videoPlayer">
          <img src="http://i.ytimg.com/vi/cbHAO7iTifI/maxresdefault.jpg" width="356" height="200"/>
          <img className="playButton" src={playButton} alt="playButton" height="54.6" width="81.9" onClick={this.onOpenModal}/>{' '}
        </div>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          animationDuration={1000}
        >
          <div className="closeButton"/>
          <iframe width="784" height="441" src="https://www.youtube.com/embed/cbHAO7iTifI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen alt="Inclined Planes Q118"></iframe>
        </Modal>
      </div>
    );
  }
}
