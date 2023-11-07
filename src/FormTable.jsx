import React from "react";
import SearchIcon from "./assets/search.png"
import FilterLogo from "./assets/Vector.png"
import data from "./Data";
import { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight, BsChevronExpand } from "react-icons/bs";
 

function FormTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortAscending, setSortAscending] = useState(null);
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

  const sortedData = [...data];
   if (sortAscending !== null) {
    sortedData.sort((a, b) => {
      return sortAscending ? a.grade - b.grade : b.grade - a.grade;
    });
  }

   const toggleSort = () => {
    if (sortAscending === null) {
      setSortAscending(true);
    } else {setSortAscending(!sortAscending);
    }
  };

    return(
        <main>
                <div className="button-and-search">
            <button className="filter-button">
          <img src={FilterLogo} alt="" className="filter-logo" />
          filter
          
        </button>
        <div className="search-input-container">
            <img src={SearchIcon} alt="" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder=""
            />
        </div>
            </div>

               <div className="table-container">

                <table className="form-table">
                    <thead>
                        <tr>
                            <th>
                    სტუდენტის სახელი და გვარი
                            </th>
                            <th>
                            სტატუსი
                            </th>
                            <th>
                            სქესი
                            </th>
                            <th>
                            ქულები
                           <BsChevronExpand size={20} onClick={toggleSort}/>
                            </th>
                            <th>
                            პირადი ნომერი
                            </th>
                            <th>
                            ელ. ფოსტა
                            </th>
                            <th>
                            მობილურის ნომერი
                            </th>
                            <th>
                            მისამართი
                            </th>
                            <th>
                            დაბადების თარიღი
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody>
          {sortedData.slice(firstIndex, lastIndex).map((student, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{student.name}</td>
              <td>{student.status}</td>
              <td>{student.gender}</td>
              <td>{student.grade}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.email}</td>
              <td>{student.mobileNumber}</td>
              <td>{student.address}</td>
              <td>{student.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
                    
                </table>
          </div>
       

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
            </main>
    )
}

export default FormTable