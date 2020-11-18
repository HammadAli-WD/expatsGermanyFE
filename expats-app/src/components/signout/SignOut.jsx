import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
const url = process.env.REACT_APP_API_HEROKU
function SignOut(props) {
    useEffect(() => {
        (async () => {
            try {
                let resp = await fetch(url + "/user/signOut", {
                    method: "POST",
                    credentials: 'include',
                    body: JSON.stringify(),
                    headers: new Headers({
                        "content-Type": "application/json"
                    })

                })
                if (resp.ok) {

                    props.history.push("/login")
                }

            } catch {
                console.log("data fetch error")
            }
        })()
    }, []);

    return (
        <div></div>
    );
}

export default withRouter(SignOut);