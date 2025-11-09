import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const GetIsSessionActive = async () => {
    const endpoint = `${apiUrl}/session/active`;

    try {
        const response = await axios.get(endpoint);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const GetIsSessionRevealed = async () => {
    const endpoint = `${apiUrl}/session/reveal`;

    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const RevealSession = async () => {
    const endpoint = `${apiUrl}/session/reveal`;

    try {
        const response = await axios.post(endpoint);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const ForfeitUser = async (user) => {
    const endpoint = `${apiUrl}/session/users/forfeit/${user.name}`;

    try {
        const response = await axios.post(endpoint);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetUser = async (username) => {
    const endpoint = `${apiUrl}/session/users/${username}`;

    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const GetRecords = async () => {
    const endpoint = `${apiUrl}/session/users`;

    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const PostUser = async (username, role, connectionId) => {
    const endpoint = `${apiUrl}/session/users`;

    try {
        const response = await axios.post(endpoint, null, {
            params: { username, role, connectionId }
        });

        if (response.data) {
            return { success: true, data: response.data };
        } else {
            return { success: false, message: "Username is already taken." };
        }
    } catch (error) {
        console.log(error);
        return { success: false, message: "Application is not working." };
    }
}

export const UpdateUserPoints = async (user) => {
    const endpoint = `${apiUrl}/session/users/${user.name}`;

    try {
        const response = await axios.post(endpoint, null, {
            params: {
                points: user.points
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const ResetUserPoints = async () => {
    const endpoint = `${apiUrl}/session/users/reset`;

    try {
        await axios.post(endpoint);
    } catch (error) {
        console.log(error);
    }
}

export const EndSession = async () => {
    const endpoint = `${apiUrl}/session/users`;

    try {
        await axios.delete(endpoint);
    } catch (error) {
        console.log(error);
    }
}

export const LeaveSession = async (username) => {
    const endpoint = `${apiUrl}/session/users/${username}`;

    try {
        await axios.delete(endpoint);
    } catch (error) {
        console.log(error);
    }
}