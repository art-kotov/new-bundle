// Core
import React from "react";
import styled from "styled-components";
//Instruments
import Image from "../assets/images/horse.png"

const App = () => <Wrapper>
  <img src={Image} alt="rock horse"/>
  <Title>Let`s rock!!!</Title>
</Wrapper>;


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default App
