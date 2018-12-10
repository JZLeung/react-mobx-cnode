import { observable, action } from 'mobx'
import Agent from '../request'

export const TOKEN_CONST = 'REACT-MOBX-CNODE-TOKEN'

class UserStore {
    @observable user = null
    @observable loginuser = null
    @observable error = undefined

    @action getUser(loginname) {
        Agent.User.info(loginname).then(user => {
            this.user = user
        })
    }

    @action unsetToken() {
        this.token = ''
    }

    @action setToken(token) {
        this.token = token
        window.localStorage.setItem(TOKEN_CONST, token)
    }

    @action checkAccessToken(token) {
        return Agent.Auth.verify(token)
    }

    @action login(token) {
        Agent.Auth.verify(token).then(res => {
            this.setToken(token)
            this.getUser(res.loginname)
        })
    }
}

export default new UserStore()
