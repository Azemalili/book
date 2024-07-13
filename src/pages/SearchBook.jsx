import React from 'react'
import CardBook from '../components/LatestBooks'
import { useParams } from 'react-router-dom'

function SearchBook({api}) {

    let { inputValue } = useParams();
    
  return (
    <>
        <h1 style={{textAlign:'center', margin: '60px 0px'}}>Searching books by: <b>{inputValue}</b></h1>
        <div id='search-by-book-name'>
            {api.filter(i => i.title.toLowerCase().includes(inputValue)).map((item,index) => {return <div key={index} style={{width: '400px'}}><CardBook item={item} index={index} /></div>})}
        </div>
    </>
  )
}

export default SearchBook