import React, { useState, useEffect } from 'react'
import CardBook from '../components/LatestBooks'

function BookByGenres({item,index}) {

    const [book, setBook] = useState([])

    useEffect(()=>{
        fetch('https://freetestapi.com/api/v1/books ')
        .then(response => response.json())
        .then(data => setBook(data))
    },[])

    const a = book.filter( s=> {return s.genre.includes(item)})

  return (
    <div>
         <h2 style={{textAlign:'center', margin:'60px 0px'}}>Books with genre: <b>{item}</b></h2>
         <div id='search-by-genre' >
            {a && a.map((it,i)=> {return <div key={i}>{<CardBook item={it} index={i} />}</div>})}
         </div>
    </div>
  )
}

export default BookByGenres