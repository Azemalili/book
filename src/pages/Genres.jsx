import React from 'react'

function Genres({genres}) {
  return (
    <>
        <h1 style={{textAlign: 'center', marginTop: '70px'}}>Genres</h1>
        <hr style={{width: '50%', marginLeft:'25%'}}></hr>
        <div id='authors' className='container'>
            {genres.map((item, index)=>{return <span id='author-card' key={index} onClick={()=>{window.location.href = `/Genre=${item}`}}>{item}</span>})}
        </div>
    </>
  )
}

export default Genres