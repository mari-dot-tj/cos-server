import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json",
        // anything we want to add to the headers
    }
});

export default httpClient;

//baseURL: process.env.VUE_APP_BASE_URL,
//baseURL: 'https://jsonplaceholder.typicode.com',