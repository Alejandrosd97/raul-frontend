import React from 'react'

export default function Pagination({ postsPerPage, totalPosts, paginate}) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <nav>
        <ul className='pagination mt-3'>
            {pageNumbers.map(number => (
                <li className='page-item' key='number'>
                    <a onClick={()=>paginate(number)} href="#" className='page-link'>{number}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}
