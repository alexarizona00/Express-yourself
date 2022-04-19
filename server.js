const express = require('express');
const fs = require('fs')
const path = require('path')

const app = express()


const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(('public')))

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

// utilized a uuid generator from a previous assignment. 
app.post("/api/notes", (req, res) => {
    let aNote = req.body;
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let uuid =   Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

    aNote.id = uuid

    savedNotes.push(aNote)

}
)

app.listen(PORT)
console.log("now listening on port 3000")