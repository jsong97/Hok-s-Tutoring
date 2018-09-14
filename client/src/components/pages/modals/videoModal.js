import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import playButton from '../../../Assets/playButton.png';
import './custom_animation.css';


export default class videoModal extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          open: false
      };
  }

  // onChangeSrc() {
  //   this.props.changeSrc(this.state.)
  // }

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
          <p>{this.props.title}</p>
        </div>
        <div className="videoPlayer">
          <img src={this.props.imgSrc} width="356" height="200"/>
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
          <iframe width="784" height="441" src={this.props.vidSrc} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen alt="Inclined Planes Q118"></iframe>
        </Modal>
      </div>
    );
  }
}
