import Card from 'react-bootstrap/Card';

import React from 'react'

const CardItem = ({data}) => {

  const {id, title, brand, category, thumbnail, price, rating} = data;

  return (
    <Card style={{ width: '18rem' }} key={id}>
    <Card.Img variant="top" src={thumbnail} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{brand}</Card.Text>
      <Card.Text>{category}</Card.Text>
      <Card.Text>{price} $</Card.Text>
      <Card.Text>{rating}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default CardItem
