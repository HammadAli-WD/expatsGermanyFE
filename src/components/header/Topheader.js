import React from "react";
import { Jumbotron } from 'react-bootstrap'
import FadeIn from "../../pages/FadeIn";
import styled from "styled-components";


const BurgerWrapper = styled.div`
  background-image: url(https://www.studying-in-germany.org/wp-content/uploads/2014/02/germany-international-students.jpg) ;
  background-size: 100% 100%;
  margin-top: 40px;
   height: 300px;
  @media (min-width: 702px) {
    height: 687px;
  }
`;
const Paragraph = styled.p`
color: #696969;
font-style: italic;
font-size: 110% ;
padding: 0px;
margin-top: 0px;
margin-left: 20px;

@media (max-width: 702px) {
    display: none;
  }
`;

function Topheader() {

  return (
    <>

      {/*  https://cdn.prod.www.manager-magazin.de/images/ebc32f7e-0001-0004-0000-000001184842_w718_r1.77_fpx50_fpy55.56.jpg */}
      <BurgerWrapper>

        <FadeIn>
          <h1 style={{ paddingTop: "20px", paddingLeft: "20px", marginBottom: "0", color: "#3E4551" }} >Welcome abroad!</h1>
          <nobr><Paragraph>Enjoy the international experience with fellow global minds</Paragraph></nobr>

        </FadeIn>

      </BurgerWrapper>

    </>
  )
}

export default Topheader