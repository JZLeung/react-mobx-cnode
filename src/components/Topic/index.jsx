import React from 'react'

import { Card, Icon, Tag, Avatar } from 'antd'

import style from './topic.module.scss'

import { formatDate } from '../../utils/common'

const Topic = ({ topic, getTagName, changeTab }) => {

    const styleObj = { width: '100%' }

    const title = topic ? (
        <div>

            <h4 className={ style[ 'topic-title' ] }>{topic.title}</h4>

            <div className={ style[ 'topic-infos' ] }>
                <span>
                    <Avatar src={ topic.author.avatar_url } />
                    {topic.author.loginname}
                </span>
                <span>
                    {topic.good ? <Tag color='#87d068' onClick={ () => changeTab(topic.tab) }>精华</Tag> : <Tag color='#108ee9' onClick={ () => changeTab(topic.tab) }>{getTagName(topic.tab)}</Tag>}
                </span>
                <span>
                    <Icon type="eye" />
                    {topic.visit_count}
                </span>
                <span>
                    <Icon type="clock-circle" />
                    {formatDate(topic.create_at)}
                </span>
            </div>
        </div>
    ) : null
    return (
        topic ? <Card className={ style.topic } style={ { styleObj } } title={ title } >

            <div dangerouslySetInnerHTML={ { __html: topic.content } }></div>

        </Card> : <Card style={ styleObj } loading={ true } />
    )
}

export default Topic
