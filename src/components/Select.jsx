import React from 'react';

function Select({ setOption }) {
   return (
      <select
         onChange={e => {
            e.target.value !== 'all' ? setOption(e.target.value) : setOption(false);
         }}
      >
         <option value={'all'}>All</option>
         <option value={10}>10</option>
         <option value={20}>20</option>
         <option value={50}>50</option>
      </select>
   );
}

export default Select;
