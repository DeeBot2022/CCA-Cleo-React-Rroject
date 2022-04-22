import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import styled from "styled-components";
import { mobileScreenSize, tabletScreenSize } from "../responsiveness";

const Container = styled.div`
  height: 60vh;
  background-color: #3792cb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: 400;
  font-size: 40px;
  margin: 20px;
`;
const Description = styled.div`
font-size 24px;
font-weight: 200;
margin-bottom: 20px;
text-align: center;
${mobileScreenSize({ textAlign: "center" })}
${tabletScreenSize({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 3px solid #45b6fe;
  ${mobileScreenSize({ width: "80%" })}
  ${tabletScreenSize({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: white;
  &:hover {
    background-color: teal;
  }
  cursor: pointer;
`;

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get daily updates form your favourite electronics.
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <RiSendPlane2Fill />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
