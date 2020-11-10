import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 2.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 1rem 0.5rem 1rem 1rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 0.9rem;
    line-height: 1;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 0.5px solid #fdcb6e;
    }
  }
`;
const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <div>
        <CollapseWrapper style={{
          transform: open.interpolate({
            range: [0, 0.2, 0.3, 1],
            output: [0, -20, 0, -200],
          }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
        >
          <NavLinks>
            <li><a href="/" onClick={props.handleNavbar}><Link to="/signUp">Sign Up</Link></a></li>
            <li><a href="/" onClick={props.handleNavbar}><Link to="/login">Sign In</Link></a></li>

          </NavLinks>
        </CollapseWrapper>
      </div>
    );
  }
  return null;
};

export default withRouter(CollapseMenu);

