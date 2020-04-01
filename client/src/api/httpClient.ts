import axios from 'axios'

const httpClient = axios.create({
    baseURL: (process.env.VUE_APP_BASE_URL !== undefined) ? process.env.VUE_APP_BASE_URL : '/',
    headers: {
        "Content-Type": "application/json",
        // anything we want to add to the headers
    }
});
export default httpClient;
