import React, { useEffect, useState } from 'react';
import { getAllLaunches } from './service';
import Launches from './components/Launches';
import Select from './components/Select';
import Pagination from './components/Pagination';

const App = () => {
   const [launches, setLaunches] = useState([]);
   const [onPage, setOnPage] = useState([]);
   const [option, setOption] = useState(false);

   useEffect(() => {
      getAllLaunches().then(response => {
         setLaunches(response.data);
      });
   }, []);

   useEffect(() => {
      setOnPage(option ? launches.slice(0, option) : launches);
   }, [option, launches]);

   return (
      <div>
         <Select setOption={setOption} />
         <Pagination launches={launches} option={option} setOnPage={setOnPage} />
         <Launches launches={onPage} />
      </div>
   );
};

export default App;
