import './App.css'
import React from 'react'
import { format } from 'date-fns'

function handleClick({_id}) {
    console.table(_id)
    window.location.href = "/post/" + _id
}

export default function Post({title, summary, content, cover, createdAt, author, _id}) {
    return (
        <div className="post" onClick={() => handleClick({_id})}>
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
                <div className="post-body" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        </div>
    )
}
