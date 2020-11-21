import React, { useEffect, useState } from "react";
import useFetch from "../../HOC/UseFetch"
import "./styles.css";
const url = process.env.REACT_APP_API_HEROKU
function HackerNews() {

    const [response, loading, hasError] = useFetch(url + "/news/hackerNews")

    return (
        <>

            {loading ?
                <div>Loading...</div> :
                (hasError ? <div>Error...</div> :
                    (
                        <div id="tickr-box" >
                            <div className="tickr-title" >HackerNews</div>
                            <div id="tickr-scroll">
                                <ul>

                                    {
                                        response.map((newsListItem, newsListItemKey) =>

                                            <li key={newsListItemKey}><a style={{ color: "white !important" }} href={newsListItem.url} target="_blank">{newsListItem.title || ""}</a></li>



                                        )
                                    }


                                </ul>
                            </div>
                        </div>




                    ))}


        </>
    )
}

export default HackerNews