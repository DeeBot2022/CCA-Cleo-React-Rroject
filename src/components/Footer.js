import React from "react";
import styled from "styled-components";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiMapPin5Fill,
} from "react-icons/ri";
import { MdAttachEmail, MdPhone } from "react-icons/md";
import { mobileScreenSize, tabletScreenSize } from "../responsiveness";

const Container = styled.div`
font-family: urbanist;
  display: flex;
  ${mobileScreenSize({ flexDirection: "column" })}
  ${tabletScreenSize({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobileScreenSize({ display: "none" })}
  ${tabletScreenSize({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobileScreenSize({ fontWeight: "bold" })}
  ${tabletScreenSize({ fontWeight: "bold" })}
`;

const Payment = styled.img`
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobileScreenSize({ backgroundColor: "#009a9a" })}
  ${tabletScreenSize({ backgroundColor: "#009a9a" })}
`;
const Description = styled.p`
  margin: 20px 0px;
  font-weight: 600;
  ${mobileScreenSize({ textAlign: "center" })}
  ${tabletScreenSize({ textAlign: "center" })}
`;

const Logo = styled.h1`
  ${mobileScreenSize({ textAlign: "center" })}
  ${tabletScreenSize({ textAlign: "center" })}
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Cleo's MetaShop</Logo>
        <Description>
          This Website was created in the Honor of a Simple Woman, with a Business Mind and an Amazing Heart. <br/><br/>  Linda Cleopatra Mark.
        </Description>
        <SocialContainer>
          <SocialIcon color="E60023">
            <RiInstagramFill />
          </SocialIcon>
          <SocialIcon color="385999">
            <RiFacebookFill />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <RiTwitterFill />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Link</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>SmartPhone</ListItem>
          <ListItem>SmartWatch</ListItem>
          <ListItem>Laptop</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RiMapPin5Fill style={{ marginRight: "10px" }} /> Mt. Craven, St.
          Patrick's, Grenada W.I.
        </ContactItem>
        <ContactItem>
          <MdPhone style={{ marginRight: "10px" }} /> +1(473)410-3622
        </ContactItem>
        <ContactItem>
          <MdAttachEmail style={{ marginRight: "10px" }} />{" "}
          davinmk@buildsite.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
