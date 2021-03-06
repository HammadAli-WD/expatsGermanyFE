import React from 'react';
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  padding-top: .7rem;
  cursor: pointer;
  display: block;
  margin-right: 20px;

  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 2.5rem;
    height: .3rem;
    margin-bottom: 0.2rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

`;
const BurgerMenu = (props) => {
  return (
    <div>
      <Wrapper onClick={props.handleNavbar}>
        <div className={props.navbarState ? "open" : ""}>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </Wrapper>
    </div>
  );
}

export default BurgerMenu;

