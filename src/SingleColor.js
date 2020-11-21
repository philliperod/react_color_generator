import React, { useState, useEffect } from 'react';
import rgbToHex from './utility';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcgColor = rgb.join(',');
  const hex = rgbToHex(...rgb);

  return (
    <article className={'color'} style={{ backgroundColor: `rgb(${bcgColor})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};

export default SingleColor;

// in the component, we are going to access the props from the state array 'list' which the values are provided from an API
// create an useState hook for alerts which default value is false (will be setup later)
// create a variable that will store the rgb hex values and joined into a string separated by a comma
