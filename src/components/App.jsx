// Core
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Instruments
import { observer } from "mobx-react-lite";
import { useStore } from "context";
// Components
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";

const App = () => {
  const [isLogin, changeLogin] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => changeLogin(!isLogin)}>
        {isLogin ? "logout" : "login"}
      </button>
      {isLogin ? <PrivateRoute /> : <PublicRoute />}
    </div>
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
