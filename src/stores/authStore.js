import { observable, action } from 'mobx'

class AuthStore {
    @observable token = ''
    @observable error = undefined

    @action setToken(token) {
        this.token = token
    }

    @action unsetToken() {
        this.token = ''
    }
}

export default new AuthStore()
