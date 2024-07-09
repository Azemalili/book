import React from 'react'
import Button from 'react-bootstrap/Button';

function Book({item}) {
  return (
   <div id='book'>
        <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}>
            <img alt={item.description} src={item.cover_image} style={{width: '600px'}} />
        </div>
        <div style={{width: '50%', display: 'flex', justifyContent: 'center', borderLeft: '1px solid grey' }}>
            <div id='bookdetails'>
                
                <h1 ><b>Title: </b>{item.title}</h1>
                <div>
                    <h3>Description:</h3>
                    <p id='carddescription'>{item.description}</p>
                </div>
                <h3>Publication year: <b>{item.publication_year}</b></h3>
                <h3>Genre: {item.genre.map((genre,i)=>{return <div key={i} style={{marginLeft: '20px'}}><b>{genre}</b></div>})}</h3>
                <Button variant="primary" style={{width: '34%', fontSize: '20px', margin: '0px 25%' }}>Add to reading list</Button>
            </div>
        </div>
   </div>
  )
}

export default Book