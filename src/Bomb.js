// In the src/Bomb.js file, create a Bomb React component.
import React from 'react';


// Let's create a component that represents a bomb timer that counts down until it reaches 0. 
// However, the only thing we're going to focus on right now is setting the initial state of 
// the bomb: the amount of seconds left on the timer. Since bomb timers can differ, 
// we'll pass in a prop to our Bomb component to determine what the starting count should be.
class Bomb extends React.Component {
constructor(props){
  super()
  this.state = {
    // The initial state of Bomb should have a property called secondsLeft
    // The initial value of secondsLeft should be equal to the initialCount prop of our Bomb component.
    secondsLeft: props.initialCount
    }
  }
/* 
We'll need to learn how to set an intial state based off that component's props. 
 React passes a component's props as an argument into the constructor (i.e., constructor(props)). 
 Remember to call super() on the first line of the constructor (this is required in React components 
 if we are to use this in the constructor). 
 Ultimately, our constructor should look something like this: 
*/

// constructor(props) { //props that the component gets from its parent
//   super()
//   this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
//     someKey: props.someValue
//   }
// }

// It should render the text '<SECONDS_LEFT> seconds left before I go boom!', 
// where <SECONDS_LEFT> is the value of secondsLeft.
// If secondsLeft equals 0, it should render 'Boom!' instead.
render() {
  return this.state.secondsLeft === 0 ? `Boom!` : `${this.state.secondsLeft} seconds left before I go boom!`;
  }
}


export default Bomb;

