import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3027'
})

export default axios