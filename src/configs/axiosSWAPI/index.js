import axios from "axios"

const axiosSWAPI = axios.create({
    baseURL: 'https://swapi.dev/api'
})

export default axiosSWAPI