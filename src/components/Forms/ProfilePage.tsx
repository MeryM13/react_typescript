import React from "react";
import {Link, useParams} from "react-router-dom";
import {} from "../../types/User"

export default function ProfilePage() {
    const {id} = useParams();
    //const user = User.GetUserById(id);

    return <>
        <h2>name here:{id}</h2>
        <Link to="/">Back</Link>
    </>;
}
