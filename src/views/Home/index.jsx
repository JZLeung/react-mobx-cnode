import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

import TopicList from 'components/TopicList/index'

@inject('topic')
@observer
class HomePage extends Component {
    componentDidMount() {
        this.props.topic.getTopics()
    }

    getTagName = (tagkey) => {
        return this.props.topic.getTagName(tagkey)
    }

    render() {
        const { topics } = this.props.topic
        console.log(topics)
        return (
            <div className="App">
                <TopicList topics={ topics } getTagName={ this.getTagName } />
            </div>
        )
    }
}

export default HomePage
