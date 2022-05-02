import React from 'react';

export default function City(props) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castleId */}
      {/* use these 3 ids in img tags load appropriate images that live in the public directory */}
      <img src={`${props.waterfrontId}.png`}/>
      <img src={`${props.skylineId}.png`}/>
      <img src={`${props.castleId}.png`}/>
    </div>
  );
}
