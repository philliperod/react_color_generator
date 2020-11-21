import React, { useState, useEffect } from 'react';
import rgbToHex from './utility';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcgColor = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <article
      className={`'color' ${index > 10 && 'color-light'} `}
      style={{ backgroundColor: `rgb(${bcgColor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

// in the component, we are going to access the props from the state array 'list' which the values are provided from an API
// created an useState hook for alerts which default value is false (will be setup later)
// created a variable that will store the rgb hex values and joined into a string separated by a comma
// created a variable that stores rgbToHex function which its parameter is using the spread operator with the 'rgb' prop to pass the whole object
// created a variable that interpolates the hexColor prop to add a hashtag in the front
// created an useEffect for the purpose of setting a time limit event for the state function alert that displays "coped to clipboard" and clean it up after render
// in the article tag className, set a conditional that checks the index of the object value is more than 10 to change the text color white
// created an onClick event listener that sets the state value of setAlert to true and copies the hex value to clipboard
// in the second paragraph tag, setup a logic that if alert is true then to display text stating hex value was copied to clipboard
