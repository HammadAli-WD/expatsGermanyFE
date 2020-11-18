import React from 'react'
import styled from "styled-components";
import { Link, withRouter } from 'react-router-dom';

const Image = styled.img`
  height: 35%;
  
  margin-top: 15px
`;
const ImageNavbar = () => {
  return (
    <div style={{ maxWidth: '0.5rem' }} >
      <Link to="/">
        <Image src="https://inassets1-internationsgmbh.netdna-ssl.com/static/bundles/internationshomepage/frontend/images/whitelogo@3x.png" alt="Company Logo" />
      </Link>
    </div>
  )
}

export default withRouter(ImageNavbar)

