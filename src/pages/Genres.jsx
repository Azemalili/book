import React from 'react'
import { Link } from 'react-router-dom'

function Genres({genres}) {
  return (
    <>
        <h1 style={{textAlign: 'center', marginTop: '70px'}}>Genres</h1>
        <hr style={{width: '50%', marginLeft:'25%'}}></hr>
        <div id='authors' className='container'>
            {genres.map((item, index)=>{return <Link id='author-card' key={index} to={`/BooksByGenre/${item}`}>{item}</Link>})}
        </div>
    </>
  )
}

export default Genres