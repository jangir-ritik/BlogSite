import '../App.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

function PostPage() {
  const [postInfo, setPostInfo] = useState(null)
  const { id } = useParams()
  useEffect(() => {

    fetch('http://localhost:4000/post/' + id)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo)
        })
      })
  }, [id])

  if (!postInfo) return '';
  console.log(postInfo)

  return (
    <div className="post-container">
      <div className="post-cover">
        <div className="post-about">
          <h1 className="post-title">{postInfo.title}</h1>
          <div className="post-author">
            <p><b>{postInfo.author.username}</b></p>
            <time className="post-date">{format(new Date(postInfo.createdAt), 'MMM dd, yyyy HH:mm')}</time>
          </div>
        </div>
        <img src={`http://localhost:4000/` + postInfo.cover} alt="Post cover" />
      </div>
      <div className="post-content">
        <h4 className="post-summary">{postInfo.summary}</h4>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
      </div>
    </div>
  )
}

export default PostPage