import React, { useState, useEffect } from 'react'
import Post from '../post'

export default function IndexPage() {
  const [postsData, setPostsData] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        console.log(posts)
        setPostsData(posts)
      })
    })
  }, [])

  return (
    postsData?.map(post => {
      return (<Post key={post._id} {...post}/>)
    })
  )
}
