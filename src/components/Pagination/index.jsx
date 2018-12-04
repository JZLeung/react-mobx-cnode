import React from 'react'

import { Button } from 'antd'

import style from './Pagination.module.scss'

const Pagination = ({ loading, prevPage, nextPage, current }) => {
    return (
        <div className={ style.Pagination }>
            {current > 1 && <Button className={ style[ 'page-button' ] } type="primary" shape="circle" loading={ loading } onClick={ prevPage } icon="arrow-left" size='large' />}
            <Button className={ style[ 'page-button' ] } type="primary" shape="circle" loading={ loading } onClick={ nextPage } icon="arrow-right" size='large' />
        </div>
    )
}

export default Pagination
