import React, {useState, useEffect} from 'react'

function Authors() {

  const [authors, setAuthors] = useState([])

  useEffect(()=>{
      fetch('https://freetestapi.com/api/v1/books')
      .then(response => response.json())
      .then(data => setAuthors(data))
  },[])


  return (
    <>
    <h1 style={{textAlign: 'center', marginTop: '70px'}}>Authors</h1>
    <div id='authors' className='container'>
      {authors.map((item, index)=>{return <span id='author-card' key={index} onClick={()=>{window.location.href = `/BooksByAuthor=${item.author}`}}>{item.author}</span>})}
    </div>
    </>
  )
}

export default Authors