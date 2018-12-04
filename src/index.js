import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'mobx-react'

import App from './App'

import './styles/styles.scss'
import 'antd/dist/antd.css'

import stores from './stores'

const rootElement = document.getElementById('root')
ReactDOM.render((
    <Provider { ...stores }>
        <App />
    </Provider>
), rootElement)
