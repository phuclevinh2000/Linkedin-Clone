import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/home">
            <img src="/images/home-logo.svg" alt=""/>
          </Link>
        </Logo>
        <Search>
          <div>
            <input />
          </div>
        </Search>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`

const Search = styled.div``