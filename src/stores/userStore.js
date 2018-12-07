import { observable, action } from 'mobx'
import Agent from '../request'

class UserStore {
    @observable user = null
    @observable error = undefined

    @action getUser(loginname) {
        Agent.User.info(loginname).then(user => {
            this.user = user
        })
    }

    @action unsetToken() {
        this.token = ''
    }
}

export default new UserStore()
