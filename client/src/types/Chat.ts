export type chat = {
    id: number,
    theme: string,
    authorId: number,
    createdAt: Date
}

//export type Chats = chat[];

export function GetChatById(searchId: any) {
    console.log(searchId);
    console.log(ChatCollection.find(({id}) => id === searchId.toString()))
    return ChatCollection.find(({id}) => id === searchId.toString());
}

export const ChatCollection = [
    {
        id: 1,
        theme: "What are you doing?",
        authorId: 2,
        createdAt: new Date(2022, 11, 23)
    },
    {
        id: 2,
        theme: "Hello people",
        authorId: 4,
        createdAt: new Date(2022, 11, 25)
    },
    {
        id: 3,
        theme: "So, Them's Fighting Herds is amazing",
        authorId: 2,
        createdAt: new Date(2022, 12, 3)
    },
    {
        id: 4,
        theme: "How to escape",
        authorId: 1,
        createdAt: new Date(2022, 11, 20)
    },
    {
        id: 5,
        theme: "Don't look people`s browser history, please!",
        authorId: 3,
        createdAt: new Date(2022, 12, 6)
    },
]


