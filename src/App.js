import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;

// for handleSubmit function, we want to access value.js and set it to a variable
// setup a try...catch statement inside the function to throw an error if user enter wrong input
// inside JSX and the input, create the className attribute and setup an if statement which will check if the state value error is true then add the error class (adds red border on input)
