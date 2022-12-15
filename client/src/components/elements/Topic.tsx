import React from "react";
import {chat} from "../../types/Chat";
import {Link} from "react-router-dom";

type topicProps = {
    userId: number,
    topic: chat
}

export default function Topic({userId, topic}:topicProps) {
    return <div>
        <>
            <Link to={userId + "/topic/" + topic.id}>{topic.id} {topic.theme}</Link>
            <br/>
            {topic.authorId} {topic.createdAt}
        </>
    </div>
}
