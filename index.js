import 'dotenv/config';

import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

import weather from "./weather/index.js";
//const weather = require("./weather");

app.use(express.json());
app.use(cors());

//test route
app.get("/", (req, res) => res.json({success: "Hello World!"}));

//weather route
app.use("/weather", weather);

app.listen(port, () => console.log(`app listening on port ${port}`));
