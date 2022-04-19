const express = require('express');

const app = express()




const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(('public')))
const api = require('./routes/api.js')(app)
const html = require('./routes/html.js')(app)


app.get('/notes', (req,res) => {
    res.sendFile(__dirname + '/public/notes.html')
})


app.listen(PORT)
console.log("now listening on port 3000")