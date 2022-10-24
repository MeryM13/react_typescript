import React, {FormEvent, useState} from "react";
import {useQuery} from "@tanstack/react-query";

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

const getPostById = async (id: string): Promise<Post> => {
    const request = await fetch(`${URL}/${id}`);
    return await request.json();
};

function usePost(postId: string) {
    return useQuery(
        ["post", postId],
        () => getPostById(postId),
        {enabled: !!postId}
    );
}

export default function QueryForm() {
    const [id, setId] = useState("");
    const [input, setInput] = useState("");

    const {status, data, error, isFetching} = usePost(id);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setId(input);
    };

    return <form onSubmit={handleSubmit}>
        <label>
            ID:
            <input type="text" value={id} onChange={e => setInput(e.target.value)}/>            <br/>
        </label>
        <button type="submit">Получить данные!</button>
        {id && status === "loading" ? (
            "Loading..."
        ) : error instanceof Error ? (
            <span>Error: {error.message}</span>
        ) : (
            <>
                <h1>{data?.title}</h1>
                <div>
                    <p>{data?.body}</p>
                </div>
                <div>{isFetching ? "Background Updating..." : " "}</div>
            </>
        )}
    </form>;
}