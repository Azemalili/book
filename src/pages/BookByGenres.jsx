import React, { useState, useEffect } from 'react'
import CardBook from '../components/LatestBooks'
import { useParams } from 'react-router'

function BookByGenres({api}) {

const params = useParams()

const filteredList = api.filter(i => i.genre.includes(params.genre))

  return (
    <div>
         <h2 style={{textAlign:'center', margin:'60px 0px'}}>Books with genre: <b>{params.genre}</b> <b></b></h2>
         {(filteredList.length !== 0) ? 
          <div id='search-by-genre' >
            { filteredList.map((item, index) => {return <div key={index} style={{width: '400px'}}     ><CardBook item={item} index={index} /></div>})}
         </div> : <h5 style={{textAlign:'center', marginTop: '70px', minHeight: '350px'}}>There is no book with author: <b>{params.genre}</b></h5>}
    </div>
  )
}

export default BookByGenres