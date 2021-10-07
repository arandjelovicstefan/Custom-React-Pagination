import React from 'react';
import Launch from './Launch';

function Launches({ launches }) {
   return (
      <div>
         {launches.map(lanuch => {
            return <Launch key={lanuch.id} launch={lanuch} />;
         })}
      </div>
   );
}

export default Launches;
