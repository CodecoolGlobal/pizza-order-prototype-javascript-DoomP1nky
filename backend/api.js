const express = require("express");
const fs = require("fs");
const path = require("path");
const fileReaderAsync = require("./fileReader");

const filePath = path.join(__dirname, "shoes.json");
const ordersPath = path.join(__dirname, "orders.json");

const router = express.Router();

router.get("/shoes", async (req, res) => {
  const fileData = await fileReaderAsync(filePath);
  const shoes = JSON.parse(fileData);
  res.json(shoes);
});

router.get("/shoes/:list", async (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

router.get("/shoes/:order", async (req, res) => {
  const fileData = await fileReaderAsync(filePath);
  const shoes = JSON.parse(fileData);
  res.send(json(shoes));
});

router.post("/retek", (req, res) => {
  const order = req.body;
  const db = JSON.parse(fs.readFileSync(ordersPath, { encoding: "utf-8" }));

  db.orders.push(order);

  fs.writeFileSync(ordersPath, JSON.stringify(db, null, 2));
  res.status(200).end();
});

module.exports = router;
