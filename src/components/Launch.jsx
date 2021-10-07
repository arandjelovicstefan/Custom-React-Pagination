import React, { useEffect, useState } from 'react';
import { getRocketById } from '../service';

function Launch({ launch }) {
   const [show, setShow] = useState(false);
   const [rocket, setRocket] = useState([]);

   useEffect(() => {
      getRocketById(launch.rocket).then(response => {
         setRocket(response.data);
      });
   }, [launch]);

   const convertTime = () => {
      const unixDate = launch.static_fire_date_unix;
      const dt = new Date(unixDate * 1000);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const year = dt.getFullYear();
      const month = months[dt.getMonth()];
      const date = dt.getDate();
      const time = date + ' ' + month + ' ' + year;
      return time;
   };

   return (
      <div>
         <img src={launch.links.patch.small} alt={launch.name} width='100px' />
         <p> Name: {launch.name} </p>
         <p> Date: {convertTime()} </p>
         <button
            onClick={() => {
               setShow(!show);
            }}
         >
            Show additional informations
         </button>
         {show ? (
            <p>
               Rocket name: {rocket.name} <br /> Active: {rocket.active ? 'true' : 'false'}
            </p>
         ) : (
            ''
         )}
      </div>
   );
}

export default Launch;
