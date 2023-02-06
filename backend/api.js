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



module.exports = router;