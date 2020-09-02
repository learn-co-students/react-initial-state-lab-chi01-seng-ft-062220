import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(
  <div>
    <ImageSlider />
    {/* As an extra step for understanding, 
    you can open in the index.js file to see 
    how we are passing the initialCount prop to Bomb */}
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('root')
);
