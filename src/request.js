import axios from 'axios'

const BASE_API = 'https://cnodejs.org/api/v1'

const service = axios.create({
    baseURL: BASE_API,
    timeout: 5000
    // withCredentials: true
})

service.interceptors.request.use(
    config => {
        return config
    }, 
    error => {
        Promise.reject(error)
    }
)

// respone拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
