import React from 'react'

export default function Post({title, summary, content, files, createdAt}) {
    return (
        <div className="post">
            <div className="image">
                <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0l-xtSo10_GXrjw05fJrZsJU91iczenEpg&usqp=CAU"></img>
            </div> 
            <div className="texts">
                <h2>{title}</h2>
                <p className="info">
                    <a href="." className="author">Author name</a>
                    <time>{createdAt}</time>
                </p>
                <h4 className="summary">{ summary }</h4>
                { content }
            </div>
        </div>
    )
}
