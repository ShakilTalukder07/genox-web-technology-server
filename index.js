const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors());

const categories = require('./data/categories.json');
console.log(categories);

app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_course = news.filter(n => n.category_id === id);
    res.send(category_course);
})

app.get('/', (req, res) => {
    res.send('Server is running')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})