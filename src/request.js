import axios from 'axios'
import authStore from './stores/authStore'

const BASE_API = 'https://cnodejs.org/api/v1'

const service = axios.create({
    baseURL: BASE_API,
    timeout: 5000
    // withCredentials: true
})

service.interceptors.request.use(
    config => {
        if (authStore.token) {
            config.url += (config.url.indexOf('?') > -1 ? '&' : '?') + `accesstoken=${ authStore.token }`
        }
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

const responseBody = res => res.data

const request = {
    get: (...args) => service.get(...args).then(responseBody),
    post: (...args) => service.post(...args).then(responseBody),
}

// export default service
const Auth = {
    verify: accesstoken => request.post('/accesstoken', { accesstoken })
}

const Topic = {
    list: (tab = '', page = 1, limit = 10) => request.get(`/topics?tab=${ tab }&page=${ page }&limit=${ limit }`),
    detail: topicId => request.get(`/topic/${ topicId }`),
    create: newTopic => request.post('/topics', newTopic)
}

export default {
    Auth,
    Topic
}
