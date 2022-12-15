import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Topic from "../elements/Topic";
import {API} from "../services/querys";

export default function TopicsForm() {

    const [userId,setUserId] = useState(0);
    const [searchString, setSearchString] = useState("");
    const [topics, setTopics] = useState([]);

    const onSubmit = () => {

    };

    useEffect(() => {
        setUserId(0);
        const userRequest = async () => {
            try {
                const user = await API.user.get();
                setUserId(user.id);
            } catch (e) {
            }
        }
        const topicsRequest = async () => {
            try {
                const topics = await API.topic.getAll(searchString);
                console.log(topics.json());
                //setTopics(topics);
            } catch (e) {
            }
        }
        topicsRequest();
        userRequest();
    }, []);

    return <>
    {userId !== 0 && <button>Create new topic</button>}
        <div>
            <input style={{width:200}} value={searchString} onChange={e => setSearchString(e.target.value.toString())}/>
            <button type={"submit"}>search</button>
        </div>
        {topics.map((topic) => (
            <div>
            <Topic userId={userId} topic={topic}/>
            </div>
        ))}
        <Link to="/DefaultForm">Home</Link>
    </>;
}
