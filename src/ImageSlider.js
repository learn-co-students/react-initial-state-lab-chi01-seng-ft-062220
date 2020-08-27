// your ImageSlider code here!
import React, { Component } from "react";


class ImageSlider extends Component {
  constructor() {
    super()
    this.state = {
    currentSlideIndex: 0
    }
  }

  render() {
    console.log('Testing imageslider')
    return(
    <h4>I am on slide {this.state.currentSlideIndex}</h4>
    )
  }
};

export default ImageSlider;