import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

import Topic from 'components/Topic'
import CommentList from 'components/CommentList'
import RightBox from 'components/RightBox'

import { Row, Col } from 'antd'

@inject('topic', 'user')
@observer
class TopicPage extends Component {

    componentDidMount() {
        const { params } = this.props.match
        this.props.topic.getTopic(params.id).then(topic => {
            this.props.user.getUser(topic.author.loginname)
        })
    }

    changeTab = (tab) => {
        this.props.topic.setTab({ key: tab })
        // this.props.topic.getTopics()
        this.props.history.push('/')
    }

    render() {

        // const { params } = this.props.match
        const { topic, getTagName } = this.props.topic
        const { user } = this.props
        // console.log(params, topic, user)

        return (
            <Row gutter={ 16 }>
                <Col sm={ 18 } xs={ 24 }>
                    <Topic topic={ topic } getTagName={ getTagName } changeTab={ this.changeTab } />

                    <CommentList comments={ topic ? topic.replies : [] } loading={ !topic }/>
                </Col>
                <Col sm={ 6 } xs={ 24 }>
                    <RightBox user={ user } loading={ !user.user } />
                </Col>
            </Row>
        )
    }
}

export default TopicPage
