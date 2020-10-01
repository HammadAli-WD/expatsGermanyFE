import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap'
import { Link } from "react-router-dom";
import useFetch from "../HOC/UseFetch"

function Headlines() {
    
  const [response, loading, hasError] = useFetch("http://localhost:3005/news/headlines") 

    return (
       <>
       
    {loading ? 
    <div>Loading...</div>:
    (hasError?<div>Error...</div>:
    (      
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Trending News</th>      
        </tr>
      </thead>
      <tbody>
        {response.map((tn,i) => 
          <tr key={i}>
            <td> <Link to={{ pathname: tn.webSearchUrl }} target="_blank" >{tn.name}</Link> 
            </td></tr>
        )} 
      </tbody>
    </Table> 
      
    ))}    
     
  
</>
)}

export default Headlines