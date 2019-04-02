import React from 'react';
import Comment from './Comment'

const Comments = ({ comments }) => {
    const keys = Object.keys(comments);
    return (
        <div>
            { /* Comments */ }
            <div>
                { keys.map(key => <Comment key={key} c={comments[key]} />) } 
            </div>
        </div>
    )
}

export default Comments;