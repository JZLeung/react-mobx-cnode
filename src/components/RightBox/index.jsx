import React, { Component } from 'react'

import { Card, Avatar, Button, Skeleton, Modal, Input, Alert } from 'antd'

import { Link } from 'react-router-dom'
import style from './right-box.module.scss'
import { observer } from 'mobx-react'

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

@observer
class RightBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showDialog: false,
            error: ''
        }
    }

    handleOk = () => {
        const token = this.input.input.value
        if (!token) {
            this.setState({
                error: '请输入你的 AccessToken'
            })
            return false
        }
        this.props.auth.checkAccessToken(token).then(res => {
            // console.log(res)
            this.props.auth.login(token)
            this.setState({
                showDialog: false,
                error: ''
            })
        }).catch(() => {
            // console.error(err)
            this.setState({
                error: 'AccessToken 错误'
            })
        })
    }

    handleCancel = () => {
        this.setState({
            showDialog: false
        })
    }

    openDialog = () => {
        this.setState({
            showDialog: true
        })
    }

    handleCloseAlert = () => {
        this.setState({
            error: ''
        })
    }

    render() {

        const { loading = false } = this.props
        const user = (this.props.auth && this.props.auth.user) || this.props.user.user
        const { error } = this.state
        console.log('Right box', user)
        return (
            <div className={ style[ 'right-box' ] }>
                {
                    loading ? <Card><Skeleton loading={ true } active avatar></Skeleton></Card>
                    : user ? <UserInfo user={ user } title='用户信息' />
                    : <Card title="CNode 社区" style={ { width: '100%' } }>
                        <p>尚未登录，请通过输入 AccessToken 进行登录</p>
                        <Modal
                            title="输入 AccessToken"
                            visible={ this.state.showDialog }
                            onOk={ this.handleOk }
                            onCancel={ this.handleCancel }
                        >
                            {
                                error ? <Alert
                                    message={ error }
                                    type="error"
                                    closable
                                    banner
                                    afterClose={ this.handleCloseAlert }
                                />
                                : null}
                            <Input placeholder="请输入你的 AccessToken" ref={ input => (this.input = input) } />
                        </Modal>
                        <Button type="primary" onClick={ this.openDialog }>AccessToken 登录</Button>
                    </Card>
                }

                {/* ADs */}
            </div>
        )
    }
}

export default RightBox
