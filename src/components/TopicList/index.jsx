import React from 'react'
import { Link } from 'react-router-dom'

import { List, Skeleton, Card, Avatar, Tag } from 'antd'
import IconText from '../IconText/index'

import Pagination from 'components/Pagination/index'

import PropTypes from 'prop-types'

const { Meta } = Card

const Topic = ({ topic }) => (
    <List.Item.Meta
        avatar={ <Avatar src={ topic.author.avatar_url } /> }
        title={ <Link to={ `/topic/${ topic.id }` } >{topic.title}</Link> }
        description={ <Link to={ `/user/@${ topic.author.loginname }` }>{topic.author.loginname}</Link> }
    />
)

const Loading = () => (
    <Card
        style={ { width: '100%', marginTop: 16 } }
    >
        <Skeleton loading={ true } avatar active>
            <Meta
                avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> }
                title="Card title"
                description="This is the description"
            />
        </Skeleton>
    </Card>
)

const TopicList = ({ topics, getTagName, loading, prevPage, nextPage, current }) => (
    <div className="topic-list">
        {
            topics.length > 0 ? (
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={ topics }
                    renderItem={ item => (
                        loading ? <List.Item><Loading /></List.Item> : <List.Item
                            key={ item.title }
                            actions={ [
                                item.good ? <Tag color='#87d068'>精华</Tag> : <Tag color='#108ee9'>{getTagName(item.tab)}</Tag>,
                                <IconText type="eye-o" text={ `${ item.visit_count }` } />,
                                <IconText type="message" text={ `${ item.reply_count }` } />
                            ] }
                        >
                            <Topic topic={ item } />
                        </List.Item>
                    ) }
                />
            ) : (
                <List>
                    <List.Item>
                        <Card
                            style={ { width: '100%', marginTop: 16 } }
                        >
                            <Skeleton loading={ true } avatar active>
                                <Meta
                                    avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> }
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Skeleton>
                        </Card>
                    </List.Item>
                </List>
            )
            
        }

        <Pagination { ...{ loading, nextPage, prevPage, current } } />
    </div>
)
const topicPropTypes = PropTypes.shape({
    author: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        loginname: PropTypes.string.isRequired
    }),
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    tab: PropTypes.string,
    id: PropTypes.string.isRequired,
    create_at: PropTypes.string.isRequired,
    reply_count: PropTypes.number.isRequired,
    visit_count: PropTypes.number.isRequired,
    good: PropTypes.bool.isRequired,
})

Topic.propTypes = {
    topic: topicPropTypes.isRequired
}

TopicList.propTypes = {
    topics: PropTypes.arrayOf(topicPropTypes).isRequired,
    getTagName: PropTypes.func.isRequired
}

export default TopicList
