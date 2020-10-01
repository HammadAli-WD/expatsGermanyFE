import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap'
import { Link } from "react-router-dom";
import useFetch from "../HOC/UseFetch"

function HackerNews() {
    
  const [response, loading, hasError] = useFetch("http://localhost:3005/news/hackerNews") 

    return (
       <>
       
    {loading ? 
    <div>Loading...</div>:
    (hasError?<div>Error...</div>:
    (      
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>TopHackerNews</th>      
        </tr>
      </thead>
      <tbody>
        {response.map((tn,i) => 
          <tr key={i}>
            <td> <Link to={{ pathname: tn.url }} target="_blank" >{tn.title}</Link> 
            </td></tr>
        )} 
      </tbody>
    </Table> 
      
    ))}    
     
  
</>
)}

export default HackerNews