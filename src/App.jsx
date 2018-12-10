import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'

import { inject, observer } from 'mobx-react'
import Dev from 'mobx-react-devtools'

import Header from 'components/Header/index'

import Home from './views/Home'
import Topic from './views/Topic'
import User from './views/User'

import { Layout } from 'antd'

const { Content, Footer } = Layout

@withRouter
@inject('topic')
@observer
class App extends Component {

    render() {
        console.log('App will render.')
        return (
            <Layout className="layout">
                <Header />
                <Content className='layout-content'>
                    <div style={ { minHeight: 280, marginTop: '10px' } }>
                        <Switch>
                            <Route path='/topic/:id' component={ Topic } />
                            <Route path='/user/@:loginname' component={ User } />
                            <Route path='/' component={ Home } strict />
                            <Redirect path='*' to='/' />
                        </Switch>
                    </div>
                </Content>
                <Footer style={ { textAlign: 'center' } }>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
                <Dev />
            </Layout>
        )
    }
}

export default App
