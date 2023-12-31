import 'dotenv/config';
import rateLimit from 'express-rate-limit';
import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

import weather from "./weather/index.js";
//const weather = require("./weather");

app.use(express.json());

const whitelist = ['http://127.0.0.1'] //dev:'127.0.0.1' (localhost), prod: app's url where hosted and remove dev
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1){
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const limiter = rateLimit({
    windowMs: 1000,
    limit: 1
});

app.use(limiter);

//test route
app.get("/", (req, res) => res.json({success: "Hello World!"}));

//weather route
app.use("/weather", weather);

app.listen(port, () => console.log(`app listening on port ${port}`));
