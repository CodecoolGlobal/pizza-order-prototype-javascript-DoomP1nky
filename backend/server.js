const express = require("express");
const path = require("path");
const apiRouter = require("./api.js");

const app = express();

app.use(express.json());

const port = 9000;

// app.get("/", (req, res) => {
//     res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
// });

app.get("/", (req, res) => {
  res.redirect(301, "/shoes/list");
});

app.get("/shoes/list", (req, res, next) => {
  res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});
//new staticmiddle app.use(express.static('mappaelérés: `${__dirname}/../frontend'))
app.use(express.static(`${__dirname}/../frontend`));

app.use("/api", apiRouter);

app.listen(port, () => console.log(`http://127.0.0.1:${port}`));
