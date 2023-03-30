import React from 'react'
import { format } from 'date-fns'

export default function Post({title, summary, content, cover, createdAt, author}) {
    return (
        <div className="post">
            <div className="image">
                <img alt="" src={"http://localhost:4000/"+cover}></img>
            </div> 
            <div className="texts">
                <h2>{title}</h2>
                <p className="info">
                    <a href="." className="author">{author.username}</a>
                    <time>{format(new Date(createdAt), 'MMM dd, yyyy HH:mm')}</time>
                </p>
                <h4 className="summary">{ summary }</h4>
                { content }
            </div>
        </div>
    )
}
