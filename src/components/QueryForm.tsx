import React, {FormEvent, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";

type Post = {
    userId: string;
    id: string;
    title: string;
    body: string;
} | undefined;

type User =
{
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcod: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
} | undefined;

const URL = "https://jsonplaceholder.typicode.com/posts";
const userURL = "https://jsonplaceholder.typicode.com/users";

const getPostById = async (id: string): Promise<Post> => {
    const request = await fetch(`${URL}/${id}`);
    return await request.json();
};

const getUserByUserId = async (userId: string | undefined): Promise<User> => {
    if (!userId) return;
    const request = await fetch(`${userURL}/${userId}`);
    return await request.json();
};

function usePost(postId: string) {
    return useQuery(
        ["post", postId],
        () => getPostById(postId),
        {enabled: !!postId}
    );
}

function useUser(userId: string | undefined) {
    return useQuery(
        ["user", userId],
        () => getUserByUserId(userId),
        {enabled: !!userId}
    );
}

export default function QueryForm() {
    const [id, setId] = useState("");
    const [userId, setUserId] = useState("");
    const [input, setInput] = useState("");

    const postQueryResult = usePost(id);
    const postData = postQueryResult.data as Post;
    let userQueryResult = useUser(postData?.userId);
    let userData = userQueryResult.data;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setId(input);

    };

    return <>
        <Link to="/DefaultForm">Home</Link>
        <form onSubmit={handleSubmit}>
            <div>
            <label>
                ID:
                <input type="number" value={input} onChange={e => setInput(e.target.value)}/> <br/>
            </label>
            <button type="submit">Получить данные!</button>
            </div>
            { (postQueryResult.isFetching || userQueryResult.isFetching)  ? (
                "Loading..."
            ) : (
                <>
                    <h1>{userData?.name} {userData?.email}</h1>
                    <div>
                        <p>{postData?.title}</p>
                        <p>{postData?.body}</p>
                    </div>
                    <div>{(postQueryResult.isFetching || userQueryResult.isFetching) ? "Background Updating..." : " "}</div>
                </>
            )}
        </form>
    </>;
}