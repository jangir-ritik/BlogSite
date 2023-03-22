express = require("express")
const mongoose = require('mongoose')
const User = require('./models/User')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://jangirritik06:67QF99Lq@cluster0.3uhimfv.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    try {
        const userDoc = await User.create({ username, password })
        res.json(userDoc)
    } catch (error) {
        res.status(400).json(error)
    }
    
    
})

app.listen('4000')

