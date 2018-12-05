import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      <p>This is the Right Arrow</p>
    </div>
  );
}

export default RightArrow;