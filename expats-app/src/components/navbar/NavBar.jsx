import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Link, withRouter} from 'react-router-dom';

import ImageNavbar from "./ImageNavbar";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";


const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  margin-bottom: 250px
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1rem;
  
  
  
  
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 3rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = (props) => {
    const barAnimation = useSpring({
      from: { transform: 'translate3d(0, -10rem, 0)' },
      transform: 'translate3d(0, 0, 0)',
    });
  
    const linkAnimation = useSpring({
      from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
      to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      delay: 800,
      config: config.wobbly,
    });
  
    return (
      <>
        <NavBar style={barAnimation}>
          <FlexContainer>
            <ImageNavbar />
            <NavLinks style={linkAnimation}>
              <a><Link to="/signUp">Sign Up</Link></a>
              <a ><Link to="/login">Sign In</Link></a>
              
            </NavLinks>
            <BurgerWrapper>
              <BurgerMenu
                navbarState={props.navbarState} 
                handleNavbar={props.handleNavbar}
              />
            </BurgerWrapper>
          </FlexContainer>
        </NavBar>
        <CollapseMenu 
          navbarState={props.navbarState} 
          handleNavbar={props.handleNavbar}
        />
     </>
    )
  }
  
  export default withRouter(Navbar)















