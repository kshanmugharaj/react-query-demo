import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { getGraphData, getStatus, sleep } from "./utils";

const app = express();
const port = 3500;

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json

app.use(async (_, __, next) => {
  await sleep(500);
  next();
});

app.get("/", (_, res) => {
  res.send(`Hello, world!!`);
});

app.post("/graph-data", (req, res) => {
  const { id, filter } = req.body;

  if (getStatus(id) === 200) {
    res.json(getGraphData(id, filter || {}));
    return;
  }

  res.status(429).json({});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
