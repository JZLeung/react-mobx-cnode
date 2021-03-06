import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import { Layout } from 'antd'

import style from './header.module.scss'

@inject('topic')
@observer
class HeaderComponent extends Component {
    
    render() {
        return (
            <Layout.Header >
                <header className={ style.header }>
                    <div className={ style[ 'header-left' ] }>
                        <NavLink to='/'>
                            <img className={ style.logo } src="http://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
                        </NavLink>
                    </div>
                    <div className={ style[ 'header-right' ] }>
                        <a href="/" className={ style[ 'header-link' ] }>首页</a>
                        <a href="https://cnodejs.org/api" className={ style[ 'header-link' ] }>API</a>
                    </div>
                </header>
            </Layout.Header>
        )
    }
}

export default HeaderComponent
