import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import styled from "styled-components";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Container = styled.div`
  padding: 25px;
  display: flex;
  flex-wrap-flex: flex;
  justify-content: space-around;
  font-family: urbanist;
  font-weight: bold;
`;
const Wrapper = styled.div``;

const ImgContainer = styled.div``;

const Image = styled.img`
  width: 80%;
  height: 30vh;
`;
const InfoContainer = styled.div`
  padding: 0px 20px;
`;
const Price = styled.h4`
  
  font-size: 20px;
  margin-bottom: 3px;
  color: #296d98;
  margin-top: 5px;
`;

const ProdName = styled.h2`
  margin-top: 5px;
  font-weight: 400;
  white-space: pre;
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  &:hover {
    background-color: #296d98;
    color: white;
    border: 2px solid #296d98;
    border-radius: 14px
    ;
  }
`;
const Button = styled.button`
  padding: 5px;
  width: 200px;
  margin: 5px;
  border: 2px solid #296d98;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #538aac;
    color: white;
  }
`;

function ProductData({ productData }) {
  const { onAdd } = useContext(DataContext);

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Link to={`/data/${productData.slug}`}>
            <Image
              src={productData.image}
              className="card-img-top"
              alt={productData.name}
            />
          </Link>
        </ImgContainer>
        <InfoContainer>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/data/${productData.slug}`}
          >
            <ProdName>{productData.name}</ProdName>
          </Link>
          <Rating
            rating={productData.rating}
            numReviews={productData.numReviews}
          />
          <Price>Price: ${productData.price.toFixed(2)}</Price>
          <Button onClick={() => onAdd(productData)}>Add to Cart</Button>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

export default ProductData;
