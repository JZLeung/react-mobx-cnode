import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

import { Row, Col, Card } from 'antd'

import TopicList from 'components/TopicList/index'
import TabBar from './TabBar'
import RightBox from 'components/RightBox/index'

import style from './Home.module.scss'
console.log(style)

@inject('topic')
@observer
class HomePage extends Component {
    componentDidMount() {
        this.props.topic.getTopics()
    }

    getTagName = (tagkey) => {
        return this.props.topic.getTagName(tagkey)
    }

    changeTab = (tab) => {
        this.props.topic.setTab(tab)
        this.props.topic.getTopics()
    }

    render() {
        const { topic } = this.props
        return (
            <div className={ style[ 'home-page' ] }>
                <Row gutter={ 16 }>
                    <Col sm={ 18 } xs={ 24 }>
                        <Card extra={ <TabBar tabs={ topic.tabs } current={ topic.tab } handleClick={ this.changeTab } /> }>

                            <div className={ style[ 'topic-list' ] }>
                                <TopicList topics={ topic.topics } getTagName={ this.getTagName } />
                            </div>
                        </Card>
                    
                    </Col>
                    <Col sm={ 6 } xs={ 24 }>
                        <RightBox />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HomePage
