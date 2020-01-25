const express = require('express')
const app = express()
const port = 3027
const configureDB = require('./config/database')
const router = require('./config/routes')
const cors=require('cors')
configureDB()

app.use(express.json())
app.use(cors())


// ROute Handlers || Request Handlers
app.get('/', (req,res) => {
    res.send('Welcome to library app')
})

app.use('/',router)

app.listen(port, () => {
    console.log('listening to the port,',port)
})
