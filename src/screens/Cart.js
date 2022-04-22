import React from "react";
//import Footer from "../components/Footer";
import styled from "styled-components";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { mobileScreenSize, tabletScreenSize } from "../responsiveness";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Container = styled.div`
font-family: urbanist;
font-weight:500;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#296d98" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobileScreenSize({ display: "none" })}
  ${tabletScreenSize({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobileScreenSize({ flexDirection: "column" })}
  ${tabletScreenSize({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin-top:15px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: bold;
`;
const SummaryItemText = styled.span``;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "bold"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span`

`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #296d98;
  color: white;
  font-weight: bold;
  border: 2px solid #6998b6;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px ${mobileScreenSize({ flexDirection: "column" })}
    ${tabletScreenSize({ flexDirection: "column" })};
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductBrand = styled.div``;

const ProductAmntContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  border: 2px solid #296d98;
  border-radius: 35%;
  padding: 5px;
  font-weight: bold;
  ${mobileScreenSize({ margin: "5px 15px" })}
  ${tabletScreenSize({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 200;
  padding: 12px;
  ${mobileScreenSize({ marginBottom: "20px" })}
  ${tabletScreenSize({ marginBottom: "20px" })}
`;

const SubTotalPrice = styled.div`
font-size: 25px;
font-weight: 200;
`;

function Cart() {
  const { onAdd, cartItems, onRemove } = useContext(DataContext);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.008;
  const shippingPrice = itemsPrice <= 800 ? 0 : -50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;


  return (
    <Container>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      <Wrapper>
        <Title> YOUR CART </Title>
        <Top>
        <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
          <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({cartItems.length})</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartItems.map((item) => (
              <div>
                <Product>
                  <ProductDetail>
                    <Image src={item.image} alt={item.name} />
                    <Details>
                      <ProductId>
                        <b>Product ID: </b>{item.id}
                      </ProductId>
                      <ProductName>
                        <b>Name: </b>
                        {item.name}
                      </ProductName>
                      <ProductBrand>
                        <b>BrandName: </b>{item.brand}
                      </ProductBrand>
                      <ProductColor color="black" />
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmntContainer>
                      <HiOutlineMinusCircle onClick={() => onRemove(item)} />
                      <ItemAmount>{item.qty}</ItemAmount>
                      <HiOutlinePlusCircle onClick={() => onAdd(item)} />
                    </ProductAmntContainer>
                    <ProductPrice><b>Price: </b>${item.price.toFixed(2)}</ProductPrice>
                    <SubTotalPrice><b>SubTotal: </b>${(item.qty * item.price).toFixed(2)}</SubTotalPrice>
                  </PriceDetail>
                </Product>
                <Hr/>
              </div>
            ))}
       
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${itemsPrice.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Cost:</SummaryItemText>
              <SummaryItemPrice>${shippingPrice.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Tax Amount: </SummaryItemText>
              <SummaryItemPrice>${taxPrice.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>TOTAL</SummaryItemText>
              <SummaryItemPrice>${totalPrice.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Cart;
