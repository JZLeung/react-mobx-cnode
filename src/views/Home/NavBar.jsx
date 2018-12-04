import React from 'react'

import { Menu } from 'antd'

const NavBar = (props) => {

    const index = props.tabs.findIndex(one => one.key === props.current)

    const active = [ `${ index }` ]
    console.log(active)
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={ active }
            style={ { lineHeight: '64px' } }
        >
            {
                props.tabs.map(tab => (
                    <Menu.Item key={ tab.key } onClick={ () => props.changeTab(tab) } >{tab.name}</Menu.Item>
                ))
            }
        </Menu>
    )
}

export default NavBar
