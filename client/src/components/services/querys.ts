export const BASE_URL = "http://127.0.0.1:3001";

type LoginData = {
    login: string;
    password: string;
};

type RegistrationData = {
    login: string;
    password: string;
    repeat: string;
}

const errorHandler = async(response: Response) => {
    if (response.status !== 200) {
        const responseData = await response.json();
        throw Error(responseData.message);
    }
}

export const API = {
    auth: {
        login: async (values: LoginData) => {
            const response = await fetch(BASE_URL + "/auth", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            await errorHandler(response);
        },
        logout: async () => {
            const response = await fetch(BASE_URL + "/auth", {
                method: "DELETE",
                credentials: "include",
            });
            await errorHandler(response);
        },
    },
    user: {
        register: async (values: RegistrationData) => {
            const response = await fetch(BASE_URL + "/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            await errorHandler(response);
        },
        get: async () => {
            const response = await fetch(BASE_URL + "/user", {
                method: "GET",
                credentials: "include",
            });
            await errorHandler(response);
            return response.json();
        },
    },
    topic: {
        getAll: async (searchString: string) => {
            const response = await fetch(BASE_URL + "/topic", {
                method: "GET",
                credentials: "include",
                body: JSON.stringify(searchString)
            });
            await errorHandler(response);
            return response;
        }
    }
};

