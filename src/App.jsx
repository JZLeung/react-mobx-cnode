import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'
import Dev from 'mobx-react-devtools'

import Header from 'components/Header/index'

import Home from './views/Home'

import { Layout } from 'antd'

const { Content, Footer } = Layout

@inject('topic')
@observer
class App extends Component {

    render() {
        return (
            <Layout className="layout">
                <Header />
                <Content className='layout-content'>
                    <div style={ { minHeight: 280, marginTop: '10px' } }>
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
