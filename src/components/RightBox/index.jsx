import React, { Component } from 'react'

import { Card, Avatar, Button } from 'antd'

const UserInfo = ({ user, title = '' }) => (
    <Card
        title={ user.loginname }
        extra={ <a href="#">More</a> }
        style={ { width: '100%' } }
    >
        <Avatar shape="square" src={ user.avatar_url } />
    </Card>
)

class RightBox extends Component {
    render() {

        const { user } = this.props
        return (
            <div className="right-box">
                {
                    user ? <UserInfo user={ user } title='用户信息' /> : (
                        <Card title="CNode 社区" style={ { width: '100%' } }>
                            <p>尚未登录，请通过输入 AccessToken 进行登录</p>
                            <Button type="primary">AccessToken 登录</Button>
                        </Card> )
                }

                {/* ADs */}
            </div>
        )
    }
}

export default RightBox
