const express = require("express");
const path = require("path");
const fileReaderAsync = require("./fileReader");
const filePath = path.join(`${__dirname}/shoes.json`);

const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const port = 9000;

// app.get("/", (req, res) => {
//     res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
// });

app.get("/", (req, res) => {
    res.redirect(301, '/shoes/list');
  });
  app.get("/shoes/list", (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
  });
//new staticmiddle app.use(express.static('mappaelérés: `${__dirname}/../frontend'))
app.use(express.static(`${__dirname}/../frontend`))

const apiRouter = require('./api.js')
app.use('/api', apiRouter)


app.listen(port, () => console.log(`http://127.0.0.1:${port}`));