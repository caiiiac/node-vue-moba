import axios from 'axios'

const http = axios.create({
    baseURL: "http://localhost:3002/admin/api"
})

export default http