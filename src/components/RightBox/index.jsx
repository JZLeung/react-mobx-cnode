import React, { Component } from 'react'

import { Card, Avatar, Button, Skeleton } from 'antd'

import { Link } from 'react-router-dom'
import style from './right-box.module.scss'

const UserInfo = ({ user, title = '' }) => (
    user ? <Card
        title={ title }
        extra={ <Link to={ `/user/@${ user.loginname }` }>More</Link> }
        style={ { width: '100%' } }
    >
        <p>
            <span>
                <Avatar shape="square" src={ user.avatar_url } />
            </span>
            {user.loginname}
        </p>
        <p>
            积分： {user.score}
        </p>
        <p>
            {user.githubUsername && <a href={ `https://github.com/${ user.githubUsername }` } target="_blank" rel="noopener noreferrer"><Button shape="circle" icon="github"></Button></a>}
        </p>
    </Card> : <Skeleton loading={ true } active avatar></Skeleton>
)

class RightBox extends Component {
    render() {

        const { user, loading = false } = this.props
        return (
            <div className={ style[ 'right-box' ] }>
                {
                    loading ? <Card><Skeleton loading={ true } active avatar></Skeleton></Card>
                    : user ? <UserInfo user={ user } title='用户信息' />
                    : <Card title="CNode 社区" style={ { width: '100%' } }>
                        <p>尚未登录，请通过输入 AccessToken 进行登录</p>
                        <Button type="primary">AccessToken 登录</Button>
                    </Card>
                }

                {/* ADs */}
            </div>
        )
    }
}

export default RightBox
