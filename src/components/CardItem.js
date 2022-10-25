import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

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

      <ReactStars
          count={5}
          size={28}
          value={rating}
          activeColor="#ffd700"
          isHalf={true}
        />

    </Card.Body>
  </Card>
  )
}

export default CardItem
