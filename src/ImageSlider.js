// your ImageSlider code here!
import React from "react"
import { render } from "enzyme"

class ImageSlider extends React.component {
    constructor(){
        super()

        this.state = {
            currentSlideIndex: 0
        }
    }


    render() {;
        return (
            <h1>This is the slide {this.state.currentSlideIndex}</h1>
        )
    }
}

export default ImageSlider