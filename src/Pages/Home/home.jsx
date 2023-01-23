import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <span className='home-text'>
        <h1 data-text="Good Gains" className='neon'>Good Gains</h1>
      </span>
      <button className='submit-btn'>Register</button>
      <button className='submit-btn'>Login</button>
    </>
  );
}

export default Home