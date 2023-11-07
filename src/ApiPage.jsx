import React, { useEffect, useState } from "react";
import data from "./Data";
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight, BsChevronExpand } from "react-icons/bs";


function ApiPage() {
    const [apiData, setApiData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const items = data.slice(firstIndex, lastIndex);
  const numPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const setPage = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= numPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <button onClick={() => setPage(i)} >{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) => setApiData(data))
    }, [])
    return(
        <div className="api-forms">
            {apiData.slice(firstIndex, lastIndex).map((student, index) => (<div key={index}>
                <h1 className="api-text-h1">{student.userID}</h1>
                <h2 className="api-text-h2">{student.title}</h2>
                <p className="api-text-p">{student.body}</p>

            </div>))}
            <footer className="pagination-footer">
        <ul className="pagination">
          <li className="page-item">
            <BsChevronDoubleLeft onClick={() => setPage(1)} disabled={currentPage === 1} size={20}  className="chevron"/>
            <BsChevronLeft onClick={prevPage} disabled={currentPage === 1} size={20} className="chevron"/>            
            
          </li>
          {renderPageNumbers()}
          <li className="page-item">
            <BsChevronRight onClick={nextPage} disabled={currentPage === numPages} size={20} className="chevron"/>
            <BsChevronDoubleRight onClick={() => setPage(5)} disabled={currentPage === 1} size={20} className="chevron"/>
            
          </li>
        </ul>
      </footer>
        </div>
        
    )
}

export default ApiPage