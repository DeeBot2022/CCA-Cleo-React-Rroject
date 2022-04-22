import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
height: 30px;
background-color: #296d98;
color:white;
font-size:50px;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: bold;
border: 3px solid #3e7ba2;
font-family: urbanist;
`;


function Announcement() {
  return (
    <Container>
        $50.00 OFF on Orders Over $800.00.. SHOP NOW!!!!!!!

    </Container>
  )
}

export default Announcement