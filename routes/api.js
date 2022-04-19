const fs = require('fs');
const notes = require('../db/db.json')
const uuid = require('../helpers/uuid')
const express = require('express')
const app = express()

module.exports = app => {
    app.get("/api/notes", (req, res) => {
        res.json(notes);
    })

    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        const file = path.join(__dirname, "../db/db.json");
    })

}