const express = require("express")
const app = express()
require("dotenv").config()

const router = require("./routes/api")

const port = process.env.PORT||300
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.get('/', (req, res) => {
//     res.send('hello')
// })

require("./db/connection")

app.get('/contact', (req, res) => {
    res.json({
        name : 'Bishal',
        contactNumber : '98xxxxx'
    })
})

app.use("/user", router)

app.listen(port, () => {
    console.log('This project is amazing' + port)
})
