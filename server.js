const express = require('express');
const app = express()
require('./helpers/routes/api')
require('./helpers/routes/html')


const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static((__dirname, 'public')))


app.get('/notes', (req,res) => {
    res.sendFile(__dirname + '/public/notes.html')
})


app.get('*', (req, res) => 
res.console.error(404));


app.listen(PORT)
console.log("now listening on port 3000")