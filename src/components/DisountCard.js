import React from 'react'
import ReactStars from "react-rating-stars-component";

const DisountCard = ({product}) => {

  const {id, title, thumbnail , discountPercentage, rating} = product
  return (

      <div className="card-product" data-id={id}>
        <img src={thumbnail} alt={title}/>
        <div className="card-product-infos">
          <h2>{product.title}</h2>
          <p>Total discount <strong>{discountPercentage}</strong> %</p>
          <ReactStars
          count={5}
          size={16}
          value={rating}
          activeColor="#ffd700"
          isHalf={true}
          edit={false}
        />
        </div>
    </div>

  )
}

export default DisountCard
