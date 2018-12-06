import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

import Topic from 'components/Topic'
import CommentList from 'components/CommentList'
import RightBox from 'components/RightBox'

import { Row, Col } from 'antd'

@inject('topic')
@observer
class TopicPage extends Component {

    componentDidMount() {
        const { params } = this.props.match
        this.props.topic.getTopic(params.id)
    }

    render() {

        const { params } = this.props.match
        const { topic, getTagName } = this.props.topic
        console.log(params, topic)

        return (
            <Row gutter={ 16 }>
                <Col sm={ 18 } xs={ 24 }>
                    <Topic topic={ topic } getTagName={ getTagName } />

                    <CommentList comments={ topic ? topic.replies : [] } loading={ !topic }/>
                </Col>
                <Col sm={ 6 } xs={ 24 }>
                    {topic && <RightBox user={ topic.author } />}
                </Col>
            </Row>
        )
    }
}

export default TopicPage
