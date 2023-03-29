import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router-dom'

function CreatePost() {
  const [title, setTitle ] = useState('')
  const [summary, setSummary ] = useState('')
  const [content, setContent ] = useState('')
  const [files, setFiles] = useState('')
  const [redirect, setRedirect] = useState(false)
  
  async function createNewPost(e) {
    e.preventDefault()
    const data = new FormData();
    data.set('title', title)
    data.set('summary', summary)
    data.set('content', content)
    data.set('files', files[0])
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
    })
    if (response.ok) {
      setRedirect(true) 
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <>
    <div>Create a new post here</div>
    <form onSubmit={createNewPost}>
      <input type="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <input type="summary" placeholder='Summary' value={summary} onChange={(e) => setSummary(e.target.value)}></input>
      <input type="file" onChange={(e) => setFiles(e.target.files)} /> 
      <ReactQuill value={content} onChange={(newValue) => setContent(newValue)} />
      <button style={{marginTop: "5px"}}>Create Post</button>
    </form>
    </>
  )
}

export default CreatePost