import Rating from "./Rating";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaBackspace } from "react-icons/fa";
import React, { useContext, useState } from "react";
import { mobileScreenSize, tabletScreenSize } from "../responsiveness";
import DataContext from "../context/DataContext";

const Container = styled.div`
  font-family: urbanist;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobileScreenSize({ padding: "10px", flexDirection: "column" })}
  ${tabletScreenSize({ padding: "10px", flexDirection: "column" })}
`;
const BackButton = styled.div`
color: #246288

`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 70%;
  height: 60vh;
  ${mobileScreenSize({ height: "40vh", width: "70%" })}
  ${tabletScreenSize({ height: "40vh", width: "70%" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobileScreenSize({ padding: "10px" })}
  ${tabletScreenSize({ padding: "10px" })}
`;
const ProdName = styled.h1`
  text-decoration: none;
`;
const ProductDesc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  font-family: Urbanist;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 35px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: solid 1px #296d98;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #296d98;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 5px;
  width: 200px;
  border: 2px solid #296d98;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #538aac;
    color: white;
  }
`;

function ProductScreenItem({ item }) {
  //const { item } = props;
  const { cartBtn, cartItems, onAdd, onRemove } = useContext(DataContext);

  return (
    <Container key={item.slug}>
      <Wrapper>
      <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
        <BackButton>
          <FaBackspace style={{ height: "5vh", width: "5vh"}} />
        </BackButton>
        </Link>
        <ImgContainer>
          <Image src={item.image} className="card-img-top" alt={item.name} />
        </ImgContainer>
        <InfoContainer>
          <ProdName>{item.name}</ProdName>
          <ProductDesc>{item.description}</ProductDesc>

          <Rating rating={item.rating} numReviews={item.numReviews} />
          <Price>${item.price.toFixed(2)}</Price>

          <FilterContainer>
            <FilterTitle>Color: </FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="white" />
            <FilterColor color="silver" />
            <FilterColor color="gold" />
          </FilterContainer>
          <AddContainer>
            {cartItems.map((item) => (
              <div>
                <AmountContainer>
                  <FaMinus onClick={() => onRemove(item)} />

                  <Amount>{item.quantity - item.qty}</Amount>
                  <FaPlus
                    onClick={() => {
                      //addOne()
                      onAdd(item);
                    }}
                  />
                </AmountContainer>
              </div>
            ))}
            <Button
              onClick={() => {
                //addOne()
                onAdd(item);
              }}
            >
              {cartBtn}
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

export default ProductScreenItem;
