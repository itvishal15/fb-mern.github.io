import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:9000'
    baseURL: 'https://fb-mern-vishal.herokuapp.com/'
})

export default instance