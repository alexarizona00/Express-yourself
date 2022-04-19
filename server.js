const express = require('express');

const app = express()


const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(('public')))
require('./routes/api.js')(app)
require('./routes/html.js')(app)


//makes the main page button work 
app.get('/notes', (req,res) => {
    res.sendFile(__dirname + '/public/notes.html')
})

// returning the database for displaying saved notes. 
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

// wildcard route to redirect to main page in event of mistyped url
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));

});

//writing a post to save the data. 

app.listen(PORT)
console.log("now listening on port 3000")