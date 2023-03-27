import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const { setUserInfo} = useContext(UserContext)

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:4000/login'
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username, password}),
            credentials: 'include'
        })
        if (response.ok) {
            alert('Login successful')
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true)
            })

        } else {
            console.log(response)
            alert('Login failed')
        }

        }

        if (redirect) {
            return (
                <Navigate to={'/'} />
            )
        }

    return (
        <form className='login' onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button>Login</button>
        </form>
    )
}
