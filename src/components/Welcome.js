import React from 'react';

function Welcome(props) {
   return (
      <div>
         <h1>{props.name}</h1>
         <p>{props.content}</p>
      </div>
      );
 }

export default Welcome;