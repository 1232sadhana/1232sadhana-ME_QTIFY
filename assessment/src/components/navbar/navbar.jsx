import React from 'react';
import styled from 'styled-components';
import LogoJSX from '../logo/logo';
import Button from '../button/button';
import SearchBarJsx from '../searchbar/searchbar';

const NavBar = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px;
 background-color: #333;
 color: #fff;
`;

const NavbarJsx = () => {
 return (
    <NavBar>
      <LogoJSX />
      <SearchBarJsx />
      <Button />
    </NavBar>
 );
};

export default NavbarJsx;