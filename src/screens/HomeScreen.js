import React from "react";
import { Row, Col } from "react-bootstrap";
//import products from "../components/Products";
import ProductData from "../components/ProductData";
import styled from "styled-components";

const Title = styled.h2`
font-family: urbanist;
margin-left: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  justify-content: space-between;
`;

function HomeScreen(props) {
  const { storeProduct } = props
  //console.log( storeProduct )

  return (
    <div>
      <Title>Feature Products:</Title>
      <div className="products">
        <Container>
          {storeProduct.data.map((productData) => (
            <div key={productData.slug} sm={6} md={4} lg={3} className="mb-3">
              <ProductData productData={productData}></ProductData>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default HomeScreen;
