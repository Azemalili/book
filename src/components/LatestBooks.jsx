import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardBook({item,index}) {

    
  return (
    <Card id='card' key={index}>
        <Card.Img  src={item.cover_image} id='card-img' />
        <Card.Body>
            <Card.Title id='card-title' ><b>{item.title}</b></Card.Title>
            <Card.Text id='carddescription'>
                {item.description}
            </Card.Text>
            <Link variant="primary" to={`/Book/${item.id}`} style={{marginTop: '10px'}} className='btn btn-primary'>View book</Link>
        </Card.Body>
    </Card> 
  )
}

export default CardBook