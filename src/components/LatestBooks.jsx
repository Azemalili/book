import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardBook({item,index}) {

    const handleButton = (e) => {
        e.preventDefault();
        window.location.href = `/Book=${item.id}`
    }
    
  return (
    <Card id='card' key={index}>
        <Card.Img  src={item.cover_image} id='card-img'  onClick={handleButton} />
        <Card.Body>
            <Card.Title id='card-title' ><b>{item.title}</b></Card.Title>
            <Card.Text id='carddescription'>
                {item.description}
            </Card.Text>
            <Button variant="primary" onClick={handleButton} style={{marginTop: '10px'}}>View book</Button>
        </Card.Body>
    </Card> 
  )
}

export default CardBook