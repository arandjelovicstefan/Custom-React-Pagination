import React, { useEffect, useState } from 'react';

function Pagination({ launches, option, setOnPage }) {
   const [pages, setPages] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const numberOfPages = Math.ceil(launches.length / option);

   const changePage = page => {
      setCurrentPage(page);
      const start = option * (page - 1);
      const end = start + option;
      setOnPage(launches.slice(start, end));
   };

   useEffect(() => {
      const arrOfPages = [];
      for (let i = 1; i <= numberOfPages; i++) {
         arrOfPages.push(i);
      }
      setPages(arrOfPages);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [option]);

   return (
      <div>
         <button onClick={() => changePage(currentPage === 1 ? currentPage : currentPage - 1)}>Back</button>
         {pages.map(page => (
            <button key={page} onClick={() => changePage(page)}>
               {page}
            </button>
         ))}
         <button onClick={() => changePage(currentPage === pages.length ? currentPage : currentPage + 1)}>Next</button>
      </div>
   );
}

export default Pagination;
