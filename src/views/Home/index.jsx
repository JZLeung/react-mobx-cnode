import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

import { Row, Col, Card } from 'antd'

import TopicList from 'components/TopicList/index'
import TabBar from './TabBar'
import RightBox from 'components/RightBox/index'

import style from './Home.module.scss'

@inject('topic', 'user')
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

    setPrevPage = () => {
        this.props.topic.setPage(-1)
    }
    setNextPage = () => {
        this.props.topic.setPage(1)
    }

    render() {
        const { topic, user } = this.props
        return (
            <div className={ style[ 'home-page' ] }>
                <Row gutter={ 16 }>
                    <Col sm={ 18 } xs={ 24 }>
                        <Card extra={ <TabBar tabs={ topic.tabs } current={ topic.tab } handleClick={ this.changeTab } /> }>
                            <div className={ style[ 'topic-list' ] }>
                                <TopicList topics={ topic.topics } current={ topic.page } loading={ topic.loading } getTagName={ this.getTagName } nextPage={ this.setNextPage } prevPage={ this.setPrevPage } />
                            </div>
                        </Card>
                    
                    </Col>
                    <Col sm={ 6 } xs={ 24 }>
                        <RightBox user={ user } />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HomePage
