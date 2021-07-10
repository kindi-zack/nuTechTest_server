if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}
const router = require('./router/index')
const express = require('express')

const app = express()
const port = process.env.PORT || 7000
// const multer = require('multer')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(router)
// console.log(process.env.NODE_ENV)
app.listen(port, ()=> console.log(`app is running on port ${port}`))