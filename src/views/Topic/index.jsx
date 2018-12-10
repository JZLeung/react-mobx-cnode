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

    render() {

        const { params } = this.props.match
        const { topic, getTagName } = this.props.topic
        const { user } = this.props.user
        console.log(params, topic, user)

        return (
            <Row gutter={ 16 }>
                <Col sm={ 18 } xs={ 24 }>
                    <Topic topic={ topic } getTagName={ getTagName } />

                    <CommentList comments={ topic ? topic.replies : [] } loading={ !topic }/>
                </Col>
                <Col sm={ 6 } xs={ 24 }>
                    <RightBox user={ user } loading={ !user } />
                </Col>
            </Row>
        )
    }
}

export default TopicPage
