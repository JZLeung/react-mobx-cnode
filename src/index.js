import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'mobx-react'

import App from './App'

import './styles/styles.scss'
import 'antd/dist/antd.css'

import stores from './stores'
import { TOKEN_CONST } from './stores/authStore'

const render = () => {
    const rootElement = document.getElementById('root')
    ReactDOM.render((
        <Provider { ...stores }>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    ), rootElement)
}

const token = window.localStorage.getItem(TOKEN_CONST)
if (token) {
    stores.auth.login(token).then(render)
} else {
    render()
}
