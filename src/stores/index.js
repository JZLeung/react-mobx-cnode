import auth from './authStore'
import topic from './topicStore'
import user, { TOKEN_CONST } from './userStore'

const token = window.localStorage.getItem(TOKEN_CONST)
if (token) {
    user.login(token)
}
export default {
    user,
    auth,
    topic
}
