import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { UserContext } from './UserContext'

export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    }, [setUserInfo])

    function logOut() {
        fetch('http://localhost:4000/logout',
            {
                credentials: 'include',
                method: 'POST'
            }
            )
            setUserInfo(null) 
    }

    const userName = userInfo?.username

    return (
        <header>
            <Link to="/" className="logo">My blog</Link>
            <nav>
                {userName ? (
                    <>
                        <h4 style={{ margin: 0 }}>{userName}</h4>
                        <Link to='/create'>Create new post</Link>
                        <a href='/' onClick={() => logOut()}>Logout</a>
                    </>
                )
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                }
            </nav>
        </header>
    )
}