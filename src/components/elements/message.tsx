import React from "react";
import {chat} from "../../types/Chat";
import moment from "moment";
import {Link} from "react-router-dom";
import {message} from "../../types/Message";

type messageProps = {
    message: message
}

export default function Message({message}:messageProps) {
    return <div>
        {message.authorId} {moment(message.createdAt).format('YYYY-MM-DD')}
        <div/>
        {message.body}
    </div>
}
