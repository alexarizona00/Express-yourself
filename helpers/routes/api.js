const fs = require('fs');
const notes = require('../../db/db.json')
const uuid = require('../../helpers/uuid')
const express = require('express')
const app = express()

app.get("/notes", (req, res) => {
    res.json(notesArray);
})