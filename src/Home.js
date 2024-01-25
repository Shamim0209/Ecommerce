import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper className="test">
      <h1>Home Page</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;
