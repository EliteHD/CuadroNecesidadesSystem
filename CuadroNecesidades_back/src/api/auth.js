import axios from "axios";

export const registerRequest = user => axios.post(env.API_URL + "/auth/register", user);

