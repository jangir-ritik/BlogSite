const express = require("express")
const mongoose = require('mongoose')
const User = require('./models/User')
const cors = require('cors')
const app = express();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(cookieParser())

const salt = bcrypt.genSaltSync(10);
const secret = 'sdffewe'

console.log('connecting to the db...')
mongoose.connect('mongodb+srv://jangirritik06:67QF99Lq@cluster0.3uhimfv.mongodb.net/?retryWrites=true&w=majority')
console.log('db connected.')

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    try {
        const userDoc = await User.create({ username, password: bcrypt.hashSync(password, salt) })
        res.status(200).json(userDoc)
    } catch (error) {
        res.status(400).json(error)
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    // try {
        const userDoc = await User.findOne({username})
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
        //     res.json('Login successful')
        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, {
                sameSite: 'none',
                secure: true
            }).json({
                id: userDoc._id,
                username,
            });
        })
        } else {
            res.status(400).json('wrong credentials')
        }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info)
    })
    // res.json(req.cookies)
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
})

app.listen('4000')

console.log('listening to port 4000')