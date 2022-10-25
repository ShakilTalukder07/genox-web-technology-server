const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const categoryCourse = news.filter(n => n.category_id === id);
    res.send(categoryCourse);
})

app.get('/course', (req, res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = news.filter(s => s._id === id);
    res.send(selectedCourse)
})

app.get('/', (req, res) => {
    res.send('Server is running')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})