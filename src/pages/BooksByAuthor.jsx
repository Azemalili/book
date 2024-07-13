import React from 'react'
import CardBook from '../components/LatestBooks'
import { useParams } from 'react-router-dom';

function BooksByAuthor({api}) {

let params = useParams();

const filteredList = api.filter(i => i.author.includes(params.authorName))



  return (
    <div>
        <h2 style={{textAlign:'center', margin:'60px 0px'}}>Books by: <b>{params.authorName}</b></h2>
        {
          (filteredList.length !== 0) ?
          <div id='search-by-book-name'>
          {filteredList.map((item, index) => {return <div key={index} style={{width: '400px'}}     ><CardBook item={item} index={index} /></div>})}
        </div>: <h5 style={{textAlign: 'center', marginTop: '70px', minHeight: '350px'}}>There is no book with author: <b>{params.authorName}</b></h5>}
    </div>
  )
}

export default BooksByAuthor