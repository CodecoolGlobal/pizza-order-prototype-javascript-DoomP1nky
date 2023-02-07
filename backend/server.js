const express = require("express");
const path = require("path");

const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//new staticmiddle app.use(express.static('mappaelérés: `${__dirname}/../frontend'))
app.use(express.static(`${__dirname}/../frontend`))

const port = 9000;

app.get("api/shoes/list", (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});


const apiRouter = require('./api.js')
app.use('/api', apiRouter)


app.listen(port, () => console.log(`http://127.0.0.1:${port}`));