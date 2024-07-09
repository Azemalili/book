import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LatestBooks({item,index}) {
  return (
    <Card id='card'>
        <Card.Img  src={item.cover_image} style={{width: '350px', height: '400px', borderRadius: '20px 20px 0px 0px'}} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
            <Button variant="primary">Add to list</Button>
        </Card.Body>
    </Card> 
  )
}

export default LatestBooks