import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        // anything we want to add to the headers
    }
});

export default httpClient;

//baseURL: process.env.VUE_APP_BASE_URL,