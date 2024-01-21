const express = require('express')
const { postData } = require('./data');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/posts', (req, res) => {
    res.json(postData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
