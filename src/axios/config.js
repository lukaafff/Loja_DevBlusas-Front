import axios from "axios";

const port = 4000
const siteFetch = axios.create({
    baseURL: "https://api-loja-dev-blusas.vercel.app",
    headers: {
        "Content-Type": "aplication/json"
    }
});

console.log(`Server rodando na porta ${port}` )

export default siteFetch;