import { observable, action } from 'mobx'
import Agent from '../request'

const tabs = [ {
    name: '全部',
    key: 'all'
},{
    name: '精华',
    key: 'good'
}, {
    name: '分享',
    key: 'share'
}, {
    name: '问答',
    key: 'ask'
}, {
    name: '招聘',
    key: 'job'
} ]

// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    tabs.push({
        name: '测试',
        key: 'dev'
    })
}

class TopicStore {
    @observable topics = []
    @observable tabs = tabs

    @observable loading = false

    @observable page = 1
    @observable limit = 15
    @observable tab = 'all'

    @observable topic = null

    @action getTopics() {
        this.loading = true
        return Agent.Topic.list(this.tab, this.page, this.limit).then(res => {
            console.log(res)
            this.topics = res
            this.loading = false
        })
    }

    @action getTagName(tagkey) {
        const tag = tabs.find(one => one.key === tagkey)
        return tag ? tag.name : '全部'
    }

    @action setTab(tab) {
        this.tab = tab.key
    }

    @action setPage(step = 1) {
        console.log(this.page, step)
        if (this.page === 1 && step === -1) return false
        this.page += step
        this.getTopics()
    }

    @action getTopic(id) {
        if (!this.topic || this.topic.id !== id) {
            this.topic = null
            return Agent.Topic.detail(id).then(res => {
                this.topic = res
                return res
            })
        }
        return Promise.resolve(this.topic)
    }
}

export default new TopicStore()
