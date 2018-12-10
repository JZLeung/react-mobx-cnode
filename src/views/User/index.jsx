import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

import { withRouter, Link } from 'react-router-dom'

import RightBox from 'components/RightBox'
import { Row, Col, Card, Avatar, List } from 'antd'

import { formatDate } from '../../utils/common'

const { Meta } = Card

@withRouter
@inject('user')
@observer
class UserPage extends Component {

    componentWillMount() {
        const { loginname } = this.props.match.params
        this.props.user.getUser(loginname)
    }

    render() {
        const { user } = this.props
        console.log(user)
        return (
            <div>
                <Row gutter={ 16 }>
                    <Col sm={ 18 } xs={ 24 }>
                        
                        {
                            user && 
                            <div>
                                <Card title={ <Link to='/'>主页</Link> } className='mb-10'>
                                    <Meta
                                        avatar={ <Avatar src={ user.avatar_url } /> }
                                        title={ user.loginname }
                                        description={ <div>
                                            <p>积分: {user.score}</p>
                                            <p>注册时间: {formatDate(user.create_at)}</p>
                                        </div> }
                                    />
                                </Card>

                                <Card title='TA 的主题' className='mb-10'>
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={ user.recent_topics }
                                        renderItem={ item => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={ <Avatar src={ item.author.avatar_url } /> }
                                                    title={ <Link to={ `/topic/${ item.id }` }>{item.title}</Link> }
                                                />
                                            </List.Item>
                                        ) }
                                    />
                                </Card>

                                <Card title='TA 的回复' className='mb-10'>
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={ user.recent_replies }
                                        renderItem={ item => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={ <Link to={ `/user/@${ item.author.loginname }` }><Avatar src={ item.author.avatar_url } /></Link> }
                                                    title={ <Link to={ `/topic/${ item.id }` }>{item.title}</Link> }
                                                />
                                            </List.Item>
                                        ) }
                                    />
                                </Card>
                            </div>
                        }
                    </Col>
                    <Col sm={ 6 } xs={ 24 }>
                        <RightBox user={ user } loading={ !user.user } />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UserPage
