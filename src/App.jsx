import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'
import Dev from 'mobx-react-devtools'

import Header from 'components/Header/index'

import Home from './views/Home'

import { Layout, Breadcrumb } from 'antd'

const { Content, Footer } = Layout

@inject('topic')
@observer
class App extends Component {

    render() {
        return (
            <Layout className="layout">
                <Header />
                <Content style={ { padding: '0 50px' } }>
                    <div style={ { background: '#fff', padding: 24, minHeight: 280 } }>
                        <Home />
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
