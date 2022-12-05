import React from "react";
import {chat} from "../../types/Chat";
import moment from "moment";
import {Link} from "react-router-dom";

type chatProps = {
    chat: chat
}

export default function Chat({chat}:chatProps) {
    return <div>
        <Link to={"/Topic/"+chat.id}>{chat.id}  {chat.theme}</Link>
        <div/>
        {chat.authorId} {moment(chat.createdAt).format('YYYY-MM-DD')}
    </div>
}
