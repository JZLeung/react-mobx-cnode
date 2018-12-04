import React from 'react'

import style from './Home.module.scss'
console.log(style)
const NavBar = (props) => {
    const { tabs, current, handleClick } = props
    return (
        <div className={ style.tabbars }>
            {
                tabs.map(tab => (
                    <span onClick={ () => handleClick(tab) } className={ [ style[ 'tabbar-item' ], current === tab.key ? style[ 'is-active' ] : '' ].join(' ') } key={ tab.key }>{tab.name}</span>
                ))
            }
        </div>
    )
}

export default NavBar
