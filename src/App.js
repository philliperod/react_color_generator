import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
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

// setup an useState for colors that needs to be generated; default will be an empty string
// setup an useState to return an error; default will be false boolean
// setup an useState to create a list of colors; default will be an array
// create a function that will handle the submission of the input hex values
// in JSX, your form will have the onSubmit attribute to handle the submission function
// input: value attribute will access the color state value; onChange attribute will run the state function which will target the input field and update the state value
