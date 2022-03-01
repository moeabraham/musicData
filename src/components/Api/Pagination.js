import React from 'react'
import './pagination.css'

const Pagination = (props) => {

const  pageNumbers = [];
// console.log(props.apiData.album.length)
for (let i=1; i <= Math.ceil(props.apiData.album.length/ props.dataPerPage); i++ ){
    // console.log(i)
    pageNumbers.push(i)
}

console.log(pageNumbers)

  return (
<nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => props.paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>  
    )
}

export default Pagination