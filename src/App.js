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
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;

// in the section tag where you will output the colors, we want to iterate over the state array list of colors
// we want two things in the array: every color in the list and its index
// we'll return the SingleColor component
// since it is a list, we'll need the key attribute equal to the index, pass all the objects in the array using spread operator, and pass the index attribute with index
