import React from 'react'

import { Card, List, Avatar, Comment, Divider } from 'antd'
import { formatDate } from '../../utils/common'

const CommentItem = ({ comment,divider }) => (
    <Comment 
        author={ comment.author.loginname } 
        avatar={ (
            <Avatar src={ comment.author.avatar_url } alt={ comment.author.loginname }/>
        ) }
        content={ <div dangerouslySetInnerHTML={ { __html: comment.content } }></div> }
        datetime={ formatDate(comment.create_at) }
    >
        {divider && <Divider style={ { margin: 0 } } />}
    </Comment>
)

const CommentList = ({ comments, loading }) => {
    return (
        <Card loading={ loading } bordered={ false } style={ { marginTop: '20px' } }>
            {!loading && <List
                header={ `${ comments.length } 个回复` }
                itemLayout="horizontal"
                dataSource={ comments }
                renderItem={ (comment, index) => <CommentItem comment={ comment } divider={ index < comments.length-1 } /> }
            ></List>}
        </Card>
    )
}

export default CommentList
