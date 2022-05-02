import React from 'react';

export default function Slogan(props) {
  return (
    <div className='slogan'>
      {/* this component takes in a slogan as a prop. Render it out here however you like */}
      <h1>{props.slogan}</h1>
    </div>
  );
}
