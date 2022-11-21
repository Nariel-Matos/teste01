import axios from 'axios'

const api = axios.create({
    baseURL: "localhost:3000",
    timeout: 10000,
    headers: { "Content-Type": "application/json" }

});

export async function cadastro(values) {

    const data = {
        "nomeDaloja": values.nomeDaloja,
        "email": values.email,
        "senha": values.senha
    }
    try {

        const res = await api.post("/cadastro", data)
        console.log(res)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}



