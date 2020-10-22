import React, { useEffect, useState } from "react";
import useFetch from "../../HOC/UseFetch"
import "./styles.css";

function HackerNews() {
    
  const [response, loading, hasError] = useFetch("http://localhost:3005/news/hackerNews") 

    return (
       <>
       
    {loading ? 
    <div>Loading...</div>:
    (hasError?<div>Error...</div>:
    (      
      <div id="tickr-box" >
      <div className="tickr-title" >HackerNews</div>
      <div id="tickr-scroll">
          <ul>

              {
                  response.map((newsListItem, newsListItemKey) => 
                  
                      <li key={newsListItemKey}><a href={newsListItem.url}>{newsListItem.title || ""}</a></li>
                         


                  )
              }


          </ul>
      </div>
  </div>

        
       
      
    ))}    
     
  
</>
)}

export default HackerNews