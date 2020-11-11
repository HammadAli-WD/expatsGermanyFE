import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";

function SignOut(props) {
    useEffect(() => {
        (async () => {
            try {
                let resp = await fetch("http://localhost:3005/user/signOut", {
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