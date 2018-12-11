import { observable, action } from 'mobx'
import Agent from '../request'

export const TOKEN_CONST = 'REACT-MOBX-CNODE-TOKEN'

class AuthStore {
    @observable token = ''
    @observable user = null
    @observable error = undefined

    @action getUser(loginname) {
        Agent.User.info(loginname).then(user => {
            this.user = user
        })
    }

    @action setToken(token) {
        this.token = token
    }

    @action unsetToken() {
        this.token = ''
    }

    @action login(token) {
        return Agent.Auth.verify(token).then(res => {
            this.setToken(token)
            // this.getUser(res.loginname)
        })
    }
}

export default new AuthStore()
