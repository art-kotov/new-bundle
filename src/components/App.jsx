// Core
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
// Instruments
import Image from "../assets/images/horse.png";
import Hello from "./Hello";

const App = ({ aaa = "2", age, name }) => (
    <Wrapper>
        <img src={Image} alt="rock horse" />
        <Title>Let`s rock!!! {name}</Title>
        <Title>Let`s rock!!! {age}</Title>
        <Title>Let`s rock!!!{aaa}</Title>
        <Hello />
    </Wrapper>
);

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

App.propTypes = {
    aaa: PropTypes.string,
    age: PropTypes.number,
    name: PropTypes.string
};

export default App;
