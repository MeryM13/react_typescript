export type message = {
    id: number,
    body: string,
    chatId: number,
    authorId: number,
    createdAt: Date
};

export type messages = message[];
