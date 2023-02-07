const express = require('express');
const router = express.Router();

const path = require("path");
const fileReaderAsync = require("./fileReader");
const filePath = path.join(`${__dirname}/shoes.json`);
const fs = require('fs');

router.get('/shoes', async (req, res) => {
    const fileData = await fileReaderAsync(filePath);
    const shoes = JSON.parse(fileData)
    res.json(shoes);
});

router.get('/shoes/:list', async (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});

router.get('/shoes/:order', async (req, res) => {
    const fileData = await fileReaderAsync(filePath);
    const shoes = JSON.parse(fileData)
    res.json(shoes.shoes[1]);
});


module.exports = router;