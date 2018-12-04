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

class TopicStore {
    @observable topics = []
    @observable tabs = tabs

    @observable page = 1
    @observable limit = 10
    @observable tab = 'all'

    @action getTopics() {
        Agent.Topic.list(this.tab, this.page, this.limit).then(res => {
            console.log(res)
            this.topics = res
        })
    }

    @action getTagName(tagkey) {
        const tag = this.tabs.find(one => one.key === tagkey)
        return tag ? tag.name : '全部'
    }

    @action setTab(tab) {
        this.tab = tab.key
    }
}

export default new TopicStore()
