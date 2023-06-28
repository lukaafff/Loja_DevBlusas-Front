import axios from "axios";

const siteFetch = axios.create({
    baseURL: "http://localhost:4444",
    headers: {
        "Content-Type": "aplication/json"
    }
});

export default siteFetch;