import axios from "axios";

const port = 4000
const siteFetch = axios.create({
<<<<<<< HEAD
    baseURL: `http://localhost:${port}`,
=======
    baseURL: "http://localhost:4000",
>>>>>>> 1ad0d438438b2d1d342a14f1a6d1c0fecd02f43e
    headers: {
        "Content-Type": "aplication/json"
    }
});

console.log(`Server rodando na porta ${port}` )

export default siteFetch;