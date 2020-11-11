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
    height: 612px;
  }
`;

function Topheader() {

    return (
        <>

            {/*  https://cdn.prod.www.manager-magazin.de/images/ebc32f7e-0001-0004-0000-000001184842_w718_r1.77_fpx50_fpy55.56.jpg */}
            <BurgerWrapper>

                <FadeIn>
                    <h1>Welcome abroad!</h1>
                    <p>
                        Enjoy the international experience with fellow global minds
            </p>
                </FadeIn>

            </BurgerWrapper>

        </>
    )
}

export default Topheader