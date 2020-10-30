import React from "react";
import { Jumbotron} from 'react-bootstrap'
import FadeIn from "../../pages/FadeIn";

function Topheader() {
    

    return (
       <>
       
    {/*  https://cdn.prod.www.manager-magazin.de/images/ebc32f7e-0001-0004-0000-000001184842_w718_r1.77_fpx50_fpy55.56.jpg */} 
    <Jumbotron className="my-5" style={{backgroundImage: 'url(https://www.studying-in-germany.org/wp-content/uploads/2014/02/germany-international-students.jpg)', backgroundSize: "100% 100%", height: '600px'}}>
        <FadeIn>
            <h1>Welcome abroad!</h1>
            <p>
            Enjoy the international experience with fellow global minds
            </p>
        </FadeIn>            
    </Jumbotron>
     
  
</>
)}

export default Topheader