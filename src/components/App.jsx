// Core
import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
// Instruments
import { observer } from "mobx-react-lite";
import { useStore } from "context";

const App = ({ aaa = "2", age, name }) => {
  const store = useStore();

  useEffect(() => {
    store.getData();
  }, [store.posts]);

  return (
    <Wrapper>
      <h1>{store.name}</h1>
      <input
        type="text"
        value={store.name}
        onChange={e => {
          store.setName(e.target.value);
        }}
      />
    </Wrapper>
  );
};

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

export default observer(App);
