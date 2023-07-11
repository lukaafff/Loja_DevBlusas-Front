import axios from "axios";

const siteFetch = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "aplication/json"
    }
});

export default siteFetch;