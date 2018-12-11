import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

import { withRouter, Link } from 'react-router-dom'

import RightBox from 'components/RightBox'
import { Row, Col, Card, Avatar, List } from 'antd'

import { formatDate } from '../../utils/common'

const { Meta } = Card

@withRouter
@inject('user', 'auth')
@observer
class UserPage extends Component {

    componentWillMount() {
        const { loginname } = this.props.match.params
        this.props.user.getUser(loginname)
    }

    render() {
        const { user, auth } = this.props

        const userInfos = user.user
        console.log(userInfos)
        return (
            <div>
                <Row gutter={ 16 }>
                    <Col sm={ 18 } xs={ 24 }>
                        
                        {
                            userInfos && 
                            <div>
                                <Card title={ <Link to='/'>主页</Link> } className='mb-10'>
                                    <Meta
                                        avatar={ <Avatar src={ userInfos.avatar_url } /> }
                                        title={ userInfos.loginname }
                                        description={ <div>
                                            <p>积分: {userInfos.score}</p>
                                            <p>注册时间: {formatDate(userInfos.create_at)}</p>
                                        </div> }
                                    />
                                </Card>

                                <Card title='TA 的主题' className='mb-10'>
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={ userInfos.recent_topics }
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
                                        dataSource={ userInfos.recent_replies }
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
                        <RightBox user={ user }  auth={ auth } loading={ !(auth.user || user.user) } />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UserPage
