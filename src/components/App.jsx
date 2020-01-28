// Core
import PropTypes from "prop-types";
import React, {  useState, lazy, Suspense } from "react";
import styled from "styled-components";
// Instruments
import { observer } from "mobx-react-lite";
// Components
const PrivateRoute = lazy(() => import("routes/PrivateRoute"));
const PublicRoute = lazy(() => import("routes/PublicRoute"));

const App = () => {
  const [isLogin, changeLogin] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => changeLogin(!isLogin)}>
        {isLogin ? "1logout" : "login"}
      </button>
      <Suspense fallback={<div>Loading...</div>}>
      {isLogin ? <PrivateRoute /> : <PublicRoute />}
      </Suspense>
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
