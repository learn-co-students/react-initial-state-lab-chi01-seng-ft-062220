// your Bomb code here!
import React from 'react'
import { render } from 'enzyme'

class Bomb extends React.component {

    constructor(props) {
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }
}

render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
        <div>{message}</div>
    )
}

export default Bomb