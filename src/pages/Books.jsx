import React, { useEffect, useState } from 'react'
import CardBook from '../components/LatestBooks'

function Books() {

    const [books, setBooks] = useState([])
  
    useEffect(()=>{
        fetch('https://freetestapi.com/api/v1/books')
        .then(response => response.json())
        .then(data => setBooks(data))
    },[])
  
    return (
    <div id='allbooks'>
        {books.map((item, index)=> {return <span key={index} ><CardBook item={item} index={index} id='card' /></span>})}
    </div>
  )
}

export default Books