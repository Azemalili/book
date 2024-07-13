import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Book({api}) {

    
    

           function convertArrayToObject(arr) {
            if (Array.isArray(arr) && arr.length > 0) {
              return arr[0];
            }
            throw new Error('The input must be a non-empty array');
          }

    const id = useParams()
    const item = api.filter(i => i.id == id.bookID)
         
  return item.map((book, index) => { return (
        <div key={index} id='book'> 
            <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}>
                <img alt={book.description} src={book.cover_image} style={{width: '600px'}} />
            </div>
            <div style={{width: '50%', display: 'flex', justifyContent: 'center', borderLeft: '1px solid grey' }}>
                <div id='bookdetails'>
                    
                    <h1 ><b>Title: </b>{book.title}</h1>
                    <h3>By: <b>{book.author}</b></h3>
                    <div>
                        <h3>Description:</h3>
                        <p id='carddescription'>{book.description}</p>
                    </div>
                    <h3>Publication year: <b>{book.publication_year}</b></h3>
                    <h3>Genre: {book.genre.map((genre,i)=>{return <Link key={i} to={`/BooksByGenre/${genre}`} style={{marginLeft: '20px',marginBottom: '5px', display:'block', color: 'rgb(70, 70, 255)'}}><b>{genre}</b></Link>})}</h3>
                    <Button variant="primary" style={{width: '34%', fontSize: '20px', margin: '0px 25%' }}>Add to reading list</Button>
                </div>
            </div>
        </div>)})
    
}

export default Book