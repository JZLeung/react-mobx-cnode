import { observable, action } from 'mobx'
import Agent from '../request'

class UserStore {
    @observable user = null
    @observable loginuser = null
    @observable error = undefined

    @action getUser(loginname) {
        if (this.user && this.user.loginname === loginname) return true
        Agent.User.info(loginname).then(user => {
            this.user = user
        })
    }
}

export default new UserStore()
