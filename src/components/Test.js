
import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";



function Test(props) {
  const { product } = props
 

  return (
    <div>
      <Link to={`/data/${product.slug}`}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
        />
      </Link>
      <div>
        <Link to={`/data/${product.slug}`}>
          <h1>{product.name}</h1>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        />
        <h1>${product.price}</h1>
        <Button>Add to Cart</Button>
      </div>
    </div>
  )
}

export default Test