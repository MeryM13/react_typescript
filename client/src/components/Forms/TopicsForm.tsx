import React, {useState} from "react";
import {Link} from "react-router-dom";
import {chat, ChatCollection} from "../../types/Chat";
import Chat from "../elements/chat";

export default function TopicsForm() {

    const [searchString, setSearchString] = useState<string>("");
    const [chats, setChats] = useState(ChatCollection);

    const onSubmit = () => {
    };

    return <>
        <div>
            <input style={{width:200}} value={searchString} onChange={e => setSearchString(e.target.value)}/>
            <button type={"submit"}>search</button>
        </div>
        {chats.map((chat) => (
            <div key={chat.id}>
            <Chat chat={chat}/>
            </div>
        ))}
        <Link to="/DefaultForm">Home</Link>
    </>;
}
