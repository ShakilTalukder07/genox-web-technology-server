const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')


app.use(cors());


app.get('/', (req, res) => {
    res.send('Server is running')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})