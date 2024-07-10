import React from 'react'
import CardBook from '../components/LatestBooks'

function BooksByAuthor({item, index}) {



  return (
    <div>
        <h2 style={{textAlign:'center', margin:'60px 0px'}}>Books by: <b>{item.author}</b></h2>
        <div id='search-by-author'>{<CardBook item={item} index={index}/>}</div>
    </div>
  )
}

export default BooksByAuthor