import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-image: url("/public/img/movies/banner.jpg");
  min-height: 400px;
  display: table;
  width: 100%;
`;

const Heading = styled.h1`
  color: ghostwhite;
  font-size: 1.5em; 
  text-transform: uppercase;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const Highlight = styled.span`
  background-color: rgba(255, 0, 0, 0.3);
`;

const Header = () => (
  <StyledHeader>
    <Heading>Movie Pass <Highlight>Blog</Highlight></Heading>
  </StyledHeader>
);

export default Header;
