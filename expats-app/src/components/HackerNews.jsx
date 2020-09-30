import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap'
import { Link } from "react-router-dom";

function HackerNews() {
    const [topNews, settopNews] = useState([]);
   

    useEffect( () => {
       fetch("http://localhost:3005/news/hackerNews")
       .then(resp => resp.json())
       .then(data => {console.log('Hacker News',data)
       settopNews(data)
    })
       .catch(err => {
        console.log(err);
    });
        }, [])
    return (
       <>
       <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>TopHackerNews</th>      
    </tr>
  </thead>
  <tbody>    
    {topNews.map((tn,i) => 
    <tr key={i}>
        <td> <Link to={{ pathname: tn.url }} target="_blank" >{tn.title}</Link> 
        </td></tr>
        )}   
  </tbody>
</Table>
</>
)}

export default HackerNews